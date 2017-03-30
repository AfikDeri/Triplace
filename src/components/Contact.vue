<template>
	<div class="w3-container w3-padding-32 w3-padding-large" id="contact">

	<div v-if="showContact">
		<div class="w3-content" style="max-width:600px">
			<h4 class="w3-center"><b>Contact Me</b></h4>
			<p class="w3-center">Now that you know us, let us know what do you think!</p>
			<form action="/" method="GET" @submit.prevent="submitForm">
				<div class="w3-section">
					<label>Name</label>
					<input class="w3-input w3-border" v-model="name" type="text" name="Name" required>
				</div>
				<div class="w3-section">
					<label>Email</label>
					<input class="w3-input w3-border" type="email" name="Email" required>
				</div>
				<div class="w3-section">
					<label>Message</label>
					<textarea rows="5" class="w3-input w3-border" name="Message" required></textarea>
				</div>
				<button type="submit" class="w3-button w3-block w3-black w3-margin-bottom submit-btn" style="background-color:#337ab7!important;">Send Message</button>
		</form>
	</div>
</div>
<div v-else>
	<div class="text-center thank-msg">
		<h3>Our team will contact you in the next 24 Hours.</h3>
		<router-link to="/">
			<button class="btn btn-primary btn-lg btn-return">
					Return Home
			</button>
			</router-link>
	</div>
</div>
</div>
</template>

<script>

	export default{
		name: "contact",

		data(){
			return {
				name: "",
				showContact: true
			};
		},

		methods: {
			submitForm(){
				this.showContact = false;
				let message = this.name + ", your message has been sent successfully.";

				swal("Thank You", message, "success");
			}
		}
	}

</script>

<style>
.submit-btn:hover {
	color: #000!important;
	box-shadow: 3px 2px 3px #beb2b2;
}

.thank-msg {
	margin-top: 20px;
}

.btn-return {
	margin-top: 15px;
}
</style>
