<template>
    <div>
        <div class="lawyer__outer">
            <b-container>
                <h1 class="lawyer__outer-heading">Yuristlar</h1>
                    <div class="lawyer__outer-list">
                        <b-row>
                            <b-col md="6" lg="4" xl="3" v-for="i of 12" :key="i" >
                                <div class="lawyer__card">
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
                        </div>
                            </b-col>
                        </b-row>
                         
                    </div>
            </b-container>
              
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