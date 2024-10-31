import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* Using component.module.css to style - this makes the paragraph styling unique to this component */}
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
