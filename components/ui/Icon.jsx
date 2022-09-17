export default function Icon({ name, category }) {
  let IconComp = require(`@/public/icons/${
    category || 'outline'
  }/${name}.svg`).default;

  return <IconComp width={20} height={20} />;
}
