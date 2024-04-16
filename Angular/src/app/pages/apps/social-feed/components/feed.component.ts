import { Component } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule],
  template: `
    <div class="card">
      <div class="card-body p-0">
        <ul ngbNav #nav="ngbNav" class="nav nav-tabs nav-bordered">
          <li [ngbNavItem]="1" class="nav-item">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="false"
              class="nav-link px-3 py-2"
            >
              <i
                class="mdi mdi-pencil-box-multiple font-18 d-md-none d-block"
              ></i>
              <span class="d-none d-md-block">Create Post</span>
            </a>
            <ng-template ngbNavContent>
              <div class="tab-pane show active p-3" id="newpost">
                <!-- comment box -->
                <div class="border rounded">
                  <form class="comment-area-box">
                    <textarea
                      rows="4"
                      class="form-control border-0 resize-none"
                      placeholder="Write something...."
                    ></textarea>
                    <div
                      class="p-2 bg-light d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-sm px-2 font-16 btn-light"
                          ><i class="uil uil-scenery"></i
                        ></a>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-sm px-2 font-16 btn-light"
                          ><i class="uil uil-location"></i
                        ></a>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-sm px-2 font-16 btn-light"
                          ><i class="uil uil-paperclip"></i
                        ></a>
                      </div>
                      <button type="submit" class="btn btn-sm btn-success">
                        <i class="uil uil-message me-1"></i>Post
                      </button>
                    </div>
                  </form>
                </div>
                <!-- end .border-->
                <!-- end comment box -->
              </div>
              <!-- end preview-->
            </ng-template>
          </li>
          <li [ngbNavItem]="2" class="nav-item">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="true"
              class="nav-link px-3 py-2"
            >
              <i class="mdi mdi-image font-18 d-md-none d-block"></i>
              <span class="d-none d-md-block">Photos/Videos</span>
            </a>
            <ng-template ngbNavContent> </ng-template>
          </li>
          <li [ngbNavItem]="3" class="nav-item">
            <a
              ngbNavLink
              data-bs-toggle="tab"
              aria-expanded="true"
              class="nav-link px-3 py-2"
            >
              <i
                class="mdi mdi-book-open-variant font-18 d-md-none d-block"
              ></i>
              <span class="d-none d-md-block">Story</span>
            </a>
            <ng-template ngbNavContent> </ng-template>
          </li>
        </ul>
        <!-- end nav-->
        <div [ngbNavOutlet]="nav" class="tab-content"></div>
        <!-- end tab-content-->
      </div>
    </div>

    <!-- start news feeds -->
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex">
          <img
            class="me-2 rounded"
            src="assets/images/users/avatar-3.jpg"
            alt="Generic placeholder image"
            height="32"
          />
          <div class="w-100">
            <div ngbDropdown class="dropdown float-end text-muted">
              <a
                ngbDropdownToggle
                class="dropdown-toggle arrow-none card-drop"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="mdi mdi-dots-horizontal"></i>
              </a>
              <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                <!-- item-->
                <a
                  ngbDropdownItem
                  href="javascript:void(0);"
                  class="dropdown-item"
                  >Edit</a
                >
                <!-- item-->
                <a
                  ngbDropdownItem
                  href="javascript:void(0);"
                  class="dropdown-item"
                  >Delete</a
                >
              </div>
            </div>
            <h5 class="m-0">Jeremy Tomlinson</h5>
            <p class="text-muted">
              <small
                >about 2 minuts ago <span class="mx-1">⚬</span>
                <span>Public</span></small
              >
            </p>
          </div>
        </div>

        <hr class="m-0" />

        <div class="font-16 text-center text-dark my-3">
          <i class="mdi mdi-format-quote-open font-20"></i> Leave one wolf alive
          and the sheep are never safe. When people ask you what happened here,
          tell them the North remembers. Tell them winter came for House Frey.
        </div>

        <hr class="m-0" />

        <div class="my-1">
          <a
            href="javascript: void(0);"
            class="btn btn-sm btn-link text-muted ps-0"
            ><i class="mdi mdi-heart text-danger"></i> 2k Likes</a
          >
          <a href="javascript: void(0);" class="btn btn-sm btn-link text-muted"
            ><i class="uil uil-comments-alt"></i> 200 Comments</a
          >
          <a href="javascript: void(0);" class="btn btn-sm btn-link text-muted"
            ><i class="uil uil-share-alt"></i> Share</a
          >
        </div>

        <hr class="m-0" />

        <div class="mt-3">
          <div class="d-flex">
            <img
              class="me-2 rounded"
              src="assets/images/users/avatar-9.jpg"
              alt="Generic placeholder image"
              height="32"
            />
            <div>
              <h5 class="m-0">Sansa Stark</h5>
              <p class="text-muted mb-0"><small>2 mins ago</small></p>

              <p class="my-1">
                This is awesome! Proud of sis :) Waiting for you to come back to
                winterfall
              </p>

              <div>
                <a
                  href="javascript: void(0);"
                  class="btn btn-sm btn-link text-muted p-0"
                >
                  <i class="uil uil-heart me-1"></i> Like
                </a>
                <a
                  href="javascript: void(0);"
                  class="btn btn-sm btn-link text-muted p-0 ps-2"
                >
                  <i class="uil uil-comments-alt me-1"></i> Reply
                </a>
              </div>

              <div class="d-flex mt-3">
                <img
                  class="me-2 rounded"
                  src="assets/images/users/avatar-8.jpg"
                  alt="Generic placeholder image"
                  height="32"
                />
                <div>
                  <h5 class="m-0">Cersei Lannister</h5>
                  <p class="text-muted mb-0"><small>1 min ago</small></p>

                  <p class="my-1">
                    I swear! She won't be able to reach to winterfall
                  </p>
                </div>
              </div>
              <!-- end d-flex-->
            </div>
            <!-- end div -->
          </div>
          <!-- end d-flex-->

          <hr />

          <div class="d-flex mb-2">
            <img
              src="assets/images/users/avatar-1.jpg"
              height="32"
              class="align-self-start rounded me-2"
              alt="Arya Stark"
            />
            <div class="w-100">
              <input
                type="text"
                class="form-control border-0 form-control-sm"
                placeholder="Write a comment"
              />
            </div>
            <!-- end w-100 -->
          </div>
          <!-- end d-flex -->
        </div>
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card -->

    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex">
          <img
            class="me-2 rounded"
            src="assets/images/users/avatar-5.jpg"
            alt="Generic placeholder image"
            height="32"
          />
          <div class="w-100">
            <div ngbDropdown class="dropdown float-end text-muted">
              <a
                ngbDropdownToggle
                class="dropdown-toggle arrow-none card-drop"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="mdi mdi-dots-horizontal"></i>
              </a>
              <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item">Edit</a>
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item">Delete</a>
              </div>
            </div>
            <h5 class="m-0">Jon Snow</h5>
            <p class="text-muted">
              <small
                >20 min ago <span class="mx-1">⚬</span>
                <span>Public</span></small
              >
            </p>
          </div>
          <!-- end w-100-->
        </div>
        <!-- end d-flex -->

        <hr class="m-0" />

        <div class="my-3">
          <p>"Feeling awesome at the wall!"</p>
          <div class="row">
            <div class="col-sm-8">
              <img
                src="assets/images/small/small-4.jpg"
                alt="post-img"
                class="rounded me-1 mb-3 mb-sm-0 img-fluid"
              />
            </div>
            <div class="col">
              <img
                src="assets/images/small/small-2.jpg"
                alt="post-img"
                class="rounded me-1 img-fluid mb-3"
              />
              <img
                src="assets/images/small/small-3.jpg"
                alt="post-img"
                class="rounded me-1 img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="mt-1 mb-1">
          <a
            href="javascript: void(0);"
            class="btn btn-sm btn-link text-muted ps-0"
            ><i class="mdi mdi-heart text-danger"></i> 1.2k Likes</a
          >
          <a href="javascript: void(0);" class="btn btn-sm btn-link text-muted"
            ><i class="uil uil-comments-alt"></i> 148 Comments</a
          >
          <a href="javascript: void(0);" class="btn btn-sm btn-link text-muted"
            ><i class="uil uil-share-alt"></i> Share</a
          >
        </div>
        <hr class="m-0" />

        <div class="mt-3">
          <div class="d-flex">
            <img
              class="me-2 rounded"
              src="assets/images/users/avatar-9.jpg"
              alt="Generic placeholder image"
              height="32"
            />
            <div class="w-100">
              <h5 class="m-0">Sansa Stark</h5>
              <p class="text-muted mb-0"><small>2 mins ago</small></p>

              <p class="my-1">
                This is awesome! Proud of sis :) Waiting for you to come back to
                winterfall
              </p>

              <div>
                <a
                  href="javascript: void(0);"
                  class="btn btn-sm btn-link text-muted p-0"
                >
                  <i class="uil uil-heart me-1"></i> Like
                </a>
                <a
                  href="javascript: void(0);"
                  class="btn btn-sm btn-link text-muted p-0 ps-2"
                >
                  <i class="uil uil-comments-alt me-1"></i> Reply
                </a>
              </div>
            </div>
            <!-- end w-100 -->
          </div>
          <!-- end d-flex -->

          <hr />

          <div class="d-flex mb-2">
            <img
              src="assets/images/users/avatar-1.jpg"
              height="32"
              class="align-self-start rounded me-2"
              alt="Arya Stark"
            />
            <div class="w-100">
              <input
                type="text"
                class="form-control border-0 form-control-sm"
                placeholder="Write a comment"
              />
            </div>
            <!-- end w-100 -->
          </div>
          <!-- end d-flex -->
        </div>
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card -->
    <!-- end news feeds -->

    <!-- loader -->
    <div class="text-center mb-3">
      <a href="javascript:void(0);" class="text-danger"
        ><i class="mdi mdi-spin mdi-loading me-1 font-16"></i> Load more
      </a>
    </div>
    <!-- end loader -->
  `,
  styles: ``,
})
export class FeedComponent {}
