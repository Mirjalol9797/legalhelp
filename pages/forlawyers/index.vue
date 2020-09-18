<template>
    <div>
        <div class="for__lawyers">
            <b-container>
            <div class="for__lawyers-header">
                <span class="for__lawyers-line"></span>
                <h1 class="for__lawyers-heading">{{$t('forlawyers.title')}}</h1>
                </div>
                <form action="" method="POST" class="form__for-lawyers">
                    <b-row>
                        <b-col lg="5">
                             <input type="text" :placeholder="$t('forlawyers.name')">
                    <input type="text"          :placeholder="$t('forlawyers.surname')">
                    <input type="tel"           :placeholder="$t('forlawyers.phonenumber')">
                    <input type="email"         :placeholder="$t('forlawyers.email')">
                <select name="" id="type-field">
                <option value="0" disabled selected>{{$t('forlawyers.type')}}</option>
                    <option value="1">{{$t('category.civillaw')}}</option>
                    <option value="2">{{$t('category.work')}}</option>
                    <option value="3">{{$t('category.citizenship')}}</option>
                    <option value="4">{{$t('category.education')}}</option>
                    <option value="5">{{$t('category.entrepreneur')}}</option>
                    <option value="6">{{$t('category.governmentservice')}}</option>
                    <option value="7">{{$t('category.familyrelations')}}</option>
                    <option value="8">{{$t('category.healthcare')}}</option>
                    <option value="9">{{$t('category.criminallaw')}}</option>
                    <option value="10">{{$t('category.court')}}</option>
                    <option value="11">{{$t('category.tax')}}</option>
                    <option value="12">{{$t('category.transportation')}}</option>
                    <option value="13">{{$t('category.agriculture')}}</option>
                    <option value="14">{{$t('category.communal')}}</option>
                    <option value="15">{{$t('category.socialprotection')}}</option>
                    <option value="16">{{$t('category.place')}}</option>
                    <option value="17">{{$t('category.bank')}}</option>
                    <option value="18">{{$t('category.consumer')}}</option>
                    <option value="19">{{$t('category.heritage')}}</option>
                </select>
                 <select name="" id="territory">
                   <option value="0" selected disabled> {{$t('region.noregion')}}</option>
                    <option value="1">{{$t('region.toshkent')}}</option>
                    <option value="2">{{$t('region.toshkentv')}}</option>
                    <option value="3"> {{$t('region.andijon')}}</option>
                    <option value="4">{{$t('region.buxoro')}}</option>
                    <option value="5"> {{$t('region.jizzax')}}</option>
                    <option value="6"> {{$t('region.qoraqalpogistion')}}</option>
                    <option value="7"> {{$t('region.qashqadaryo')}}</option>
                    <option value="8">{{$t('region.navoi')}}</option>
                    <option value="9">{{$t('region.namangan')}}</option>
                    <option value="10">{{$t('region.samarqand')}}</option>
                    <option value="11">{{$t('region.surxondaryo')}}</option>
                    <option value="12">{{$t('region.sirdaryo')}}</option>
                    <option value="13"> {{$t('region.fargona')}}</option>
                    <option value="14"> {{$t('region.xorazm')}}</option>
                </select>
                        </b-col>
                        <b-col lg="3" class="overflow-hidden">
                            <input type="file"  class="file__for-lawyers">
                        </b-col>
                         <b-col lg="4" class="text-center">
                            <textarea name="textearea__for-lawyers" class="textearea__for-lawyers" id="" :placeholder="$t('forlawyers.bio')"></textarea>
                        </b-col>
                    </b-row>
                   <div class="for__lawyers-btn-wrap">
                       <b-button class="for__lawyers-btn">{{$t('forlawyers.next')}}</b-button>
                   </div>
                    </form>      
            </b-container>
        </div>
    </div>
</template>