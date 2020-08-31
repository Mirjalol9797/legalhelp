<template>
	<div>
		<div class="registration__wrapper">
			<div class="step__two-registration-inner">
				<b-container>
				<div class="step__two-registration">
					<div class="registration__header">
          		<nuxt-link to="" class="registration__arrow-link">
          			<img src="../assets/images/registration/left-arrow.svg">
          		</nuxt-link>
          	</div>
          	  <form action="" method="POST" class="registration__form">
              <div class="name">
                <label for="name">Ism</label>
                <input type="text" id="name">
              </div>
              <div class="surname">
                <label for="surname">Familya</label>
                <input type="text" id="surname">
              </div>
                <div class="phone__number">
                <label for="phone">Tel raqam</label>
                <div class="input__tel-wrapper">
                <span class="tel__code">+998</span>
                <input type="tel" id="phone">
                </div>
              </div>
              <div class="registration__email">
              	<label for="registration_email">E-mail adress</label>
              	<input type="email" id="registration_email">
              </div>
              <div class="password">
                <label for="password">Parol</label>
                <input type="password" id="password">
              </div>
            
              <div class="registration-submit-wrap">
              	
				<b-button class="registration-submit">Davom etish</b-button> 
              </div>
            </form>

				</div>
			</b-container>
			</div>
			
		</div>
	</div>
</template>