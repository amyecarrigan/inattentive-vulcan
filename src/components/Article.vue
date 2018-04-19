<template>
  <article class="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <router-link to="/blog">Back</router-link>
    <div class="article__body" v-html="article.body"></div>
    <footer v-html="mailchimpForm"></footer>
  </article>
</template>

<script>
export default {
  name: 'Article',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: require(`../posts/${this.id}.md`), // eslint-disable-line global-require, import/no-dynamic-require
      mailchimpForm: `<!-- Begin MailChimp Signup Form -->
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
        <div id="mc_embed_signup">
        <form action="https://inattentivevulcan.us15.list-manage.com/subscribe/post?u=b60769c4c396bda04dbf97196&amp;id=e13f580d03" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
          <h2>Weekly-ish Newsletter</h2>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <p><a href="https://us15.campaign-archive.com/home/?u=b60769c4c396bda04dbf97196&id=e13f580d03" title="View previous campaigns">View previous campaigns.</a></p>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b60769c4c396bda04dbf97196_e13f580d03" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
        </div>

        <!--End mc_embed_signup-->`,
    };
  },
};
</script>

