export default function () {
  const show = useState('navbar', () => false);

  function toggleNav() {
    show.value = !show.value;
  }

  return {
    show,
    toggleNav,
  };
}
