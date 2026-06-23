document.addEventListener("DOMContentLoaded", () => {
  // Determine text direction
  const bodyDir = window.getComputedStyle(document.body).direction;
  const dirAr = bodyDir === "rtl";

  // make navbar fixed while scrolling
  window.addEventListener("scroll", () =>
    document
      .getElementById("mainNav")
      .classList.toggle("fixed", window.scrollY > 40),
  );

  // Scroll to the top of the page
  window.addEventListener("scroll", () => {
    document.getElementById("scrollUp").style.display =
      window.scrollY > 300 ? "block" : "none";
  });

   // make navbar fixed while scrolling
  window.addEventListener("scroll", () =>
    document
      .getElementById("mainNav")
      .classList.toggle("bg", window.scrollY > 40),
  );

  // change 2nd word color
  const paragraph = document.querySelector(".logo-img span");
  if (paragraph) {
    const words = paragraph.innerText.split(" ");
    words[1] = `<span class="secondary">${words[1]}</span>`;
    paragraph.innerHTML = words.join(" ");
  }

  // const select = document.querySelector(".form-select");
  // if (select) {
  //   document.querySelectorAll("select").forEach(function (select) {
  //     const numberOfOptions = select.options.length;

  //     // إخفاء الـ <select> الأصلي
  //     select.classList.add("select-hidden");

  //     // إنشاء الهيكل الخاص بـ select-styled
  //     const wrapper = document.createElement("div");
  //     wrapper.classList.add("select");
  //     select.parentNode.insertBefore(wrapper, select);
  //     wrapper.appendChild(select);

  //     const styledSelect = document.createElement("div");
  //     styledSelect.classList.add("select-styled");
  //     styledSelect.textContent = select.options[0].textContent;
  //     wrapper.appendChild(styledSelect);

  //     const optionsList = document.createElement("ul");
  //     optionsList.classList.add("select-options");
  //     wrapper.appendChild(optionsList);

  //     // إضافة الخيارات إلى القائمة المخصصة
  //     Array.from(select.options).forEach((option, index) => {
  //       const listItem = document.createElement("li");
  //       listItem.textContent = option.textContent;
  //       listItem.setAttribute("rel", option.value);
  //       optionsList.appendChild(listItem);

  //       if (option.selected) {
  //         listItem.classList.add("is-selected");
  //       }
  //     });

  //     const listItems = optionsList.querySelectorAll("li");

  //     // عند الضغط على العنصر المخصص
  //     styledSelect.addEventListener("click", function (e) {
  //       e.stopPropagation();
  //       document
  //         .querySelectorAll("div.select-styled.active")
  //         .forEach(function (activeStyledSelect) {
  //           if (activeStyledSelect !== styledSelect) {
  //             activeStyledSelect.classList.remove("active");
  //             activeStyledSelect.nextElementSibling.style.display = "none";
  //           }
  //         });

  //       styledSelect.classList.toggle("active");
  //       optionsList.style.display = styledSelect.classList.contains("active")
  //         ? "block"
  //         : "none";
  //     });

  //     // عند اختيار عنصر من القائمة
  //     listItems.forEach(function (listItem) {
  //       listItem.addEventListener("click", function (e) {
  //         e.stopPropagation();
  //         styledSelect.textContent = listItem.textContent;
  //         styledSelect.classList.remove("active");

  //         select.value = listItem.getAttribute("rel");

  //         optionsList
  //           .querySelectorAll("li.is-selected")
  //           .forEach(function (selectedItem) {
  //             selectedItem.classList.remove("is-selected");
  //           });
  //         listItem.classList.add("is-selected");

  //         optionsList.style.display = "none";

  //         // يمكنك إضافة أي شيء هنا مثل: console.log(select.value);
  //       });
  //     });

  //     // عند الضغط خارج العنصر
  //     document.addEventListener("click", function () {
  //       styledSelect.classList.remove("active");
  //       optionsList.style.display = "none";
  //     });
  //   });
  // }

  $(".hero-slider .owl-carousel").owlCarousel({
    margin: 14,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    // stagePadding: 10,
    items: 3,
    // animateIn: "fadeInLeft",
    responsive: {
      0: {
        items: 3,
        stagePadding: 0,
      },
      600: {
        items: 4,
        stagePadding: 0,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".our_team .owl-carousel").owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: true,
    navText: [
      `<span class="prev"><i class="bi bi-arrow-left"></i></span>`,
      `<span class="next"><i class="bi bi-arrow-right"></i></i></span>`,
    ],
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    // stagePadding: 120,
    // animateIn: "fadeInLeft",
    responsive: {
      0: {
        items: 1.25,
        stagePadding: 0,
      },
      600: {
        items: 2,
        stagePadding: 0,
      },
      1000: {
        items: 3.2,
      },
    },
  });

  $(".awards .owl-carousel").owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    dots: true,
    // autoplay: true,
    loop: true,
    animateIn: "fadeInLeft",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".awards-slider .owl-carousel").owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
      0: {
        items: 1.25,
        stagePadding: 0,
      },
      600: {
        items: 2.1,
        stagePadding: 0,
      },
      1000: {
        items: 1.5,
      },
    },
  });


  $(".testimonials .owl-carousel").owlCarousel({
    margin: 8,
    stagePadding: 4,
    responsiveClass: true,
    rtl: dirAr,
    nav: true,
    navText: [
      `<span class="prev"><i class="bi bi-arrow-left"></i></span>`,
      `<span class="next"><i class="bi bi-arrow-right"></i></i></span>`,
    ],
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    items: 1,

  });

  // upload and preview multiple images such as dropzone
  function ImgUpload() {
  let imgArray = [];

  $(".upload__inputfile").each(function () {
    const $input = $(this);

    $input.on("change", function (e) {
      const imgWrap = $input
        .closest(".upload__box")
        .find(".upload__img-wrap");

      const maxLength = parseInt($input.attr("data-max_length")) || 20;
      const files = Array.from(e.target.files);

      files.forEach((file) => {
        // منع الزيادة عن الحد
        if (imgArray.length >= maxLength) return;

        // أنواع الملفات المسموحة
        const allowedTypes = [
          "image/",
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        const isAllowed = allowedTypes.some((type) =>
          file.type.startsWith(type)
        );

        if (!isAllowed) return;

        imgArray.push(file);

        const reader = new FileReader();

        reader.onload = function (e) {
          let previewContent = "";

          // لو صورة
          if (file.type.startsWith("image/")) {
            previewContent = `<img src="${e.target.result}" alt="${file.name}" class="w-100 h-100 object-fit-cover">`;
          } 
          // لو PDF
          else if (file.type === "application/pdf") {
            previewContent = `
              <div class="file-preview text-center p-3">
                <i class="bi bi-file-earmark-pdf fs-1 text-danger"></i>
                <p class="small mt-2 mb-0">${file.name}</p>
              </div>`;
          } 
          // لو Word / CV
          else {
            previewContent = `
              <div class="file-preview text-center p-3">
                <i class="bi bi-file-earmark-text fs-1 text-primary"></i>
                <p class="small mt-2 mb-0">${file.name}</p>
              </div>`;
          }

          const html = `
            <div class="col">
              <div class="upload__img-box position-relative">
                <div 
                  class="img-bg border rounded overflow-hidden position-relative"
                  data-file="${file.name}"
                  style="height:120px;"
                >
                  <span class="upload__img-close position-absolute top-0 end-0 m-1 btn btn-sm btn-danger">×</span>
                  ${previewContent}
                </div>
              </div>
            </div>
          `;

          imgWrap.append(html);
        };

        // لو صورة نقرأها، لو ملف عادي برضه نستخدم readAsDataURL للأيقونة
        reader.readAsDataURL(file);
      });
    });
  });

  // حذف الملف (يشتغل مع أكتر من upload box)
  $(document).on("click", ".upload__img-close", function () {
    const $box = $(this).closest(".upload__box");
    const inputElement = $box.find(".upload__inputfile")[0];
    const fileName = $(this).parent().data("file");

    const dt = new DataTransfer();

    // تحديث الأراي
    imgArray = imgArray.filter((file) => file.name !== fileName);

    // إعادة بناء الملفات داخل input
    Array.from(inputElement.files).forEach((file) => {
      if (file.name !== fileName) {
        dt.items.add(file);
      }
    });

    inputElement.files = dt.files;

    // حذف من الواجهة
    $(this).closest(".col").remove();
  });
}

ImgUpload();

  new WOW().init();
});
