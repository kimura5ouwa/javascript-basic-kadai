
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const dateTimeFormat = new Intl.DateTimeFormat('JST', options);

console.log(dateTimeFormat.format(new Date()));
