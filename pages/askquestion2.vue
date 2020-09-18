<template>
	<div>
		<div class="registration__wrapper">
			<div class="step__two-registration-inner">
				<b-container>
					<h1 class="step__two-heading">Savol Berish</h1>
				<div class="step__two-registration">
					<div class="registration__header">
          		<nuxt-link to="askquestions" class="registration__arrow-link">
          			<img src="../assets/images/registration/left-arrow.svg">
          		</nuxt-link>
          		<span class="step__page-number">2/4</span>
          	</div>
          	  <form action="" method="POST" class="registration__form">
              <div class="name">
                <label for="name">{{$t('askquestion.name')}}</label>
                <input type="text" id="name">
              </div>
              <div class="surname">
                <label for="surname">{{$t('askquestion.surname')}}</label>
                <input type="text" id="surname">
              </div>
              <div class="registration__email">
              	<label for="registration_email">{{$t('forlawyers.email')}}</label>
              	<input type="email" id="registration_email">
              </div>
              <div class="city">
                <label for="city">{{$t('askquestion.city')}}</label>
                <input type="text" id="city">
              </div>
              <div class="phone__number">
                <label for="phone">{{$t('askquestion.number')}}</label>
                <div class="input__tel-wrapper">
                <span class="tel__code">+998</span>
                <input type="tel" id="phone">
                </div>
              </div>
              <div class="registration-submit-wrap">
              	
				<b-button class="registration-submit" :to="localePath('/askquestion3')">{{$t('forlawyers.next')}}</b-button> 
              </div>
            </form>

				</div>
			</b-container>
			</div>
			
		</div>
	</div>
</template>