<template>
    <div>
        <div class="lawyer__outer">
          <div class="lawyer__outer-inner">
             <b-container>
                <h1 class="lawyer__outer-heading">Yuristlar</h1>
                <form action="" class="lawyer__list-search" method="POST">
                  <b-row>
                    <b-col lg="12" xl="5">
                       <select name="type" id="type" required>
                    <option value="0" disabled selected>Yo'nalish turini tanlang</option>
                    <option value="1">Fuqarolik huquqi (umumiy masalalar)</option>
                    <option value="2">Mehnat munosabatlari</option>
                    <option value="3">Fuqarolik / Migratsiya</option>
                    <option value="4">Ta’lim</option>
                    <option value="5">Tadbirkorlik (biznes huquqi)</option>
                    <option value="6">Davlat xizmatlari</option>
                    <option value="7">Oilaviy munosabatlar</option>
                    <option value="8">Sog‘liqni saqlash</option>
                    <option value="9">Jinoyat huquqi</option>
                    <option value="10">Sud-huquq masalalari</option>
                    <option value="11">Soliqlar</option>
                    <option value="12">Transport (Avtomobil huquqi)</option>
                    <option value="13">Qishloq xo‘jaligi</option>
                    <option value="14">Uy-joy va kommunal masalalari</option>
                    <option value="15">Ijtimoiy himoya</option>
                    <option value="16">Yer masalalari</option>
                    <option value="17">Bank sohasi</option>
                    <option value="18">Iste’molchi huquqi</option>
                    <option value="19">Meros</option>
                  </select>
                    </b-col>
                    <b-col lg="12" xl="3">
                       <select name="" id="region-select">
                    <option value="0" selected disabled>Hududni Tanlang</option>
                    <option value="1">Region yo'q</option>
                    <option value="2">Toshkent shahri</option>
                    <option value="3"> Toshkent viloyati</option>
                    <option value="4">Andijon</option>
                    <option value="5"> Buxoro</option>
                    <option value="6"> Jizzax</option>
                    <option value="7"> Qoraqalpog'iston</option>
                    <option value="8"> Qashqadaryo</option>
                    <option value="9">Navoiy</option>
                    <option value="10"> Namangan</option>
                    <option value="11"> Samarqand</option>
                    <option value="12">Surxondaryo</option>
                    <option value="13"> Sirdaryo</option>
                    <option value="14"> Farg'ona</option>
                    <option value="15">Xorazm</option>
                  </select>
                    </b-col>
                    <b-col lg="12" xl="3">
                       <select name="rating" id="rating">
                    <option value="0" selected disabled>Reytingni tanlang</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                    </b-col>
                    <b-col lg="12" xl="1">
                      <input type="submit" value="Qidirish">
                    </b-col>
                        </b-row>
                </form>
                    <div class="lawyer__outer-list">
                        <b-row>
                            <b-col md="6" lg="4" xl="3" v-for="i of 12" :key="i" >
                                <a href="#" class="lawyer__card">
                            <div class="lawyer__card-img">
                                <img src="../assets/images/lawyer-card/member1.jpg" alt="">
                            </div>
                            <div class="lawyer__card-info text-center">
                                <div class="lawyer__card-name">John Smith</div>
                                <span class="lawyer__card-place">Toshkent shahri</span>
                                <p class="lawyer__card-category">Kategoriya : <span>Korporativ yurist</span></p>
                                <span class="lawyer__card-rating">Reyting: <span>4.0</span>
                                <vue-stars
                  class="vue__star"
                  name="rate"
                  active-color="#0028AA"
                  inactive-color="#282932"
                  shadow-color="##0028AA"
                  hover-color="#00aced"
                  :max="1"
                  :value="1"
                  :readonly="false"
                  char="★"
                />
                                </span>
                                <div class="lawyer__card-success">Muvaffaqiyatli ishlar soni  <span class="lawyer__card-success-count">16</span></div>
                            </div>
                        </a>
                            </b-col>
                        </b-row>
                         
                    </div>
            </b-container>
              
          </div>
           
        </div>
        <!-- /.lawyer__outer -->
    </div>
</template>


<script>
export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1,
    };
  },
};
</script>