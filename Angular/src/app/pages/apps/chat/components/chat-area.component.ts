import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { messages } from '@core/data'
import {
  SimplebarAngularComponent,
  SimplebarAngularModule,
} from 'simplebar-angular'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { PickerModule } from '@ctrl/ngx-emoji-mart'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji'
import { ChatMessage, ChatUser } from '@core/model/chat.model'

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [
    CommonModule,
    SimplebarAngularModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
  ],
  template: `
    <div class="card">
      <div class="card-body px-0 pb-0">
        <ul class="conversation-list px-3">
          <ngx-simplebar data-simplebar style="max-height: 554px" #scrollRef>
            @for (msg of messageData; track $index) {
              <li
                class="clearfix"
                [ngClass]="{ odd: msg.from.id == toUser.id }"
              >
                <div class="chat-avatar">
                  <img src="{{ msg.from.avatar }}" class="rounded" alt="" />
                  <i>{{ msg.sendOn }}</i>
                </div>
                <div class="conversation-text">
                  <div class="ctext-wrap">
                    <i>{{ msg.from.name }}</i>
                    @if (msg.message.type == 'text') {
                      <p>{{ msg.message.value.text }}</p>
                    }
                  </div>
                  @if (msg.message.type == 'file') {
                    <div class="card mt-2 mb-1 shadow-none border text-start">
                      <div class="p-2">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <div class="avatar-sm">
                              <span class="avatar-title rounded"> .ZIP </span>
                            </div>
                          </div>
                          <div class="col ps-0">
                            <a
                              href="javascript:void(0);"
                              class="text-muted fw-bold"
                              >Hyper-admin-design.zip</a
                            >
                            <p class="mb-0">2.3 MB</p>
                          </div>
                          <div class="col-auto">
                            <!-- Button -->
                            <a
                              href="javascript:void(0);"
                              class="btn btn-link btn-lg text-muted"
                            >
                              <i class="ri-download-2-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div ngbDropdown class="conversation-actions dropdown">
                  <button
                    ngbDropdownToggle
                    class="btn btn-sm btn-link arrow-none"
                    aria-expanded="false"
                  >
                    <i class="uil uil-ellipsis-v"></i>
                  </button>

                  <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                    <a
                      ngbDropdownItem
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >Copy Message</a
                    >
                    <a
                      ngbDropdownItem
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >Edit</a
                    >
                    <a
                      ngbDropdownItem
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >Delete</a
                    >
                  </div>
                </div>
              </li>
            }
          </ngx-simplebar>
        </ul>
      </div>
      <!-- end card-body -->
      <div class="card-body p-0">
        <div class="row">
          <div class="col">
            <div class="mt-2 bg-light p-3">
              <form
                (ngSubmit)="messageSave()"
                [formGroup]="formData"
                class="needs-validation"
                novalidate=""
                name="chat-form"
                id="chat-form"
              >
                <div class="row">
                  <div class="col mb-2 mb-sm-0">
                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="Enter your text"
                      formControlName="message"
                      required
                      [ngClass]="{
                        'is-invalid': submitted && form['message'].errors
                      }"
                      [(ngModel)]="emoji"
                    />
                    <div class="invalid-feedback">
                      Please enter your messsage
                    </div>
                  </div>
                  <div class="col-sm-auto">
                    <div class="btn-group">
                      <a href="javascript:void(0)" class="btn btn-light"
                        ><i class="uil uil-paperclip"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-light"
                        (click)="toggleEmojiPicker()"
                      >
                        <i class="uil uil-smile"></i>
                      </a>
                      @if (showEmojiPicker) {
                        <emoji-mart
                          class="emoji-mart"
                          (emojiSelect)="addEmoji($event)"
                          tooltip="Pick your emoji…"
                        ></emoji-mart>
                      }
                      <div class="d-grid">
                        <button type="submit" class="btn btn-success chat-send">
                          <i class="uil uil-message"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row-->
              </form>
            </div>
          </div>
          <!-- end col-->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end card -->
  `,
  styles: ``,
})
export class ChatAreaComponent {
  @Input() selectedUser!: ChatUser
  formData!: UntypedFormGroup
  submitted = false
  emoji = ''

  constructor(public formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    // Validation
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    })

    this.onListScroll()
  }

  toUser = {
    id: 9,
    name: 'Shreyu N',
    avatar: '/assets/images/users/avatar-1.jpg',
    email: 'support@coderthemes.com',
    phone: '+1 456 9595 9594',
    location: 'California, USA',
    languages: 'English, German, Spanish',
    groups: 'Work, Friends',
  }

  messageData: ChatMessage[] = []

  @ViewChild('scrollRef', { static: false })
  scrollRef!: SimplebarAngularComponent // Assuming SimpleBar attaches to an HTMLElement

  ngOnChanges(): void {
    this.messageData = []
    messages.forEach((msg) => {
      if (
        (msg.to.id === this.toUser.id &&
          msg.from.id === this.selectedUser.id) ||
        (this.toUser.id === msg.from.id && msg.to.id === this.selectedUser.id)
      ) {
        this.messageData.push(msg)
      }
    })
  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 300
    this.onListScroll()
  }

  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
          this.scrollRef.SimpleBar.getScrollElement().scrollHeight
      }, 100)
    }
  }

  messageSave() {
    const message = this.formData.get('message')!.value
    if (this.formData.valid && message) {
      this.messageData.push({
        id: this.messageData.length + 1,
        from: this.toUser,
        to: this.selectedUser,
        message: { type: 'text', value: { text: message } },
        sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
      })
    }

    setTimeout(() => {
      this.messageData.push({
        id: this.messageData.length + 1,
        from: this.selectedUser,
        to: this.toUser,
        message: { type: 'text', value: { text: message } },
        sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
      })
      this.onListScroll()
    }, 1000)

    this.onListScroll()
    this.formData.reset()
  }

  get form() {
    return this.formData.controls
  }

  // Emoji Picker
  showEmojiPicker = false
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger',
  ]
  set = 'twitter'
  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker
  }

  addEmoji(event: EmojiEvent) {
    const { emoji } = this
    const text = `${emoji}${event.emoji.native}`
    this.emoji = text
    this.showEmojiPicker = false
  }
}
