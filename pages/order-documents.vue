<template>
  <div>
    <div class="order-documents-wrapper">
      <b-container>
        <h1 class="order-documets-heading">Hujjat buyurtma qilish</h1>
        <div class="order-documents-inner">
          <div class="order-documents-motto">
            Sizga da’vo ariza yoki shikoyat tayyorlash kerakmi? Shartnoma
            tuzish? Balki o’z korxonangizni tuzish uchun hujjatlar zarurdir?
            Ariza qoldiring va butun mamlakat bo’ylab yuristlar sizga o’z
            takliflaridan ma’qulini tanlang.
          </div>
          <b-row>
            <b-col lg="4" md="6">
              <div class="type-of-documents">
                <div class="type-of-documents-item">
                  <div class="type-of-documents-header">
                    <label for="type-of-doc1">
                      <input type="radio" id="type-of-doc1" name="name" />
                      <span class="checkmark"></span>
                      <h6>Biznesni ro'yxatga olish</h6>
                    </label>
                  </div>
                  <p class="card__text">
                    Tadbirkorlikni ro'yxatga olish MCHJ, YATT, XK va boshqalarga
                    mos hujjatlar to'plamini tayyorlash
                  </p>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="6">
              <div class="type-of-documents">
                <div class="type-of-documents-item">
                  <div class="type-of-documents-header">
                    <label for="type-of-doc2">
                      <input type="radio" id="type-of-doc2" name="name" />
                      <span class="checkmark"></span>
                      <h6>Shartnoma va bitimlar</h6>
                    </label>
                  </div>
                  <p class="card__text">
                    Ijara shartnomasi, lizing, oldi-sotdi, qarz, vositachilik va
                    boshqa turdagi shartnomalar
                  </p>
                </div>
              </div>
            </b-col>

            <b-col lg="4" md="6">
              <div class="type-of-documents">
                <div class="type-of-documents-item">
                  <div class="type-of-documents-header">
                    <label for="type-of-doc3">
                      <input type="radio" id="type-of-doc3" name="name" />
                      <span class="checkmark"></span>
                      <h6>Sud hujjatlari</h6>
                    </label>
                  </div>
                  <p class="card__text">
                    Da'vo arizasi, da'vo arizasiga qo'shimcha kiritish,
                    iltimosnoma, sud qaroridan ustidan shikoyat va h.k.
                  </p>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="6">
              <div class="type-of-documents">
                <div class="type-of-documents-item">
                  <div class="type-of-documents-header">
                    <label for="type-of-doc4">
                      <input type="radio" id="type-of-doc4" name="name" />
                      <span class="checkmark"></span>
                      <h6>Iste'molchi shikoyatlari</h6>
                    </label>
                  </div>
                  <p class="card__text">
                    Tovarlarni uchun to'langan pulni qaytarish, sug'urta, bank,
                    uy-joy kommunal xizmatlari va boshqalar.
                  </p>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="6">
              <div class="type-of-documents">
                <div class="type-of-documents-item">
                  <div class="type-of-documents-header">
                    <label for="type-of-doc5">
                      <input type="radio" id="type-of-doc5" name="name" />
                      <span class="checkmark"></span>
                      <h6>Mansabdor shaxs ustidan shikoyat</h6>
                    </label>
                  </div>
                  <p class="card__text">
                    Sud xodimi, IIV/DAN va boshqa davlat xizmatchisining harakat
                    yuzasidan shikoyat
                  </p>
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="6">
              <div class="type-of-documents">
                <div class="type-of-documents-item">
                  <div class="type-of-documents-header">
                    <label for="type-of-doc6">
                      <input type="radio" id="type-of-doc6" name="name" />
                      <span class="checkmark"></span>

                      <h6>Boshqa turdagi hujjatlar</h6>
                    </label>
                  </div>
                  <p class="card__text">
                    Yuqorida ko'rsatilmagan har qanday hujjat. Hujjat
                    tafsilotini, turini va qanday boshqa talablarni
                    belgilashingiz mumkin
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="order-documents-form">
            <form action="" method="POST" class="registration__form">
              <div class="language">
                <label for="language">Til</label>
                <select name="" id="language">
                  <option value="o'zbek">O’zbek</option>
                  <option value="Rus">Rus</option>
                  <option value="Ingliz">Ingliz</option>
                </select>
              </div>
              <div class="category">
                <label for="language">Kategoriya</label>
                <select name="" id="language">
                  <option value="1">Mehnat shartnomasi</option>
                  <option value="2">Oldi-sotdi shartnomasi</option>
                  <option value="3">Xizmat ko'rsatish shartnomasi</option>
                  <option value="4">Hadya shartnomasi</option>
                  <option value="5">Ijara shartnomasi</option>
                  <option value="6">Boshqa</option>
                </select>
              </div>
              <div class="question__title">
                <label for="question__title">Savol sarlavhasi</label>
                <input
                  type="text"
                  id="question__title"
                  placeholder="Qanday hujjat kerak?"
                />
              </div>
              <div class="question__text">
                <label for="question__text">Batafsil ma'lumot</label>
                <textarea
                  name=""
                  id="question__text"
                  placeholder="Batafsil ma'lumot"
                ></textarea>
              </div>
              <div class="file">
                <label for="file__input">Fayl</label>
                <input type="file" value="Upload file" class="file__input" />
              </div>
              <div class="registration__button-wrap">
                <b-button class="registration__btn">Davom etish</b-button>
              </div>
            </form>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
