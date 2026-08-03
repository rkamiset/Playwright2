const { getRandomValues } = require('node:crypto');

function getRandomString(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const imageURLs = [
  'https://ix-marketing.imgix.net/global.jpg',
  'https://ix-marketing.imgix.net/blog-The%20Real%20Price%20of%20DIY%20Image%20Optimization.png',
  'https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-3_boost-seo.jpg',
  'https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-4-tell-stories.jpg',
  'https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-7_brand-stories_canvas.jpg',
  'https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-8_take-away.jpg',
  'https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-4_drive-engagement.jpg'
];

const randomImage = getRandomString(imageURLs);
const randomString = getRandomValues(Buffer.from('test'));
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const randomNumber = Math.floor(Math.random() * 10000); // 0 to 9999

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
  }
}

module.exports = {
  randomImage,
  randomString,
  today,
  randomNumber,
  LoginPage
};
