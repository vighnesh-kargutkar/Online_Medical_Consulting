import classes from "./HomeCard.module.css";
export default function HomeCard({ header, data, image }) {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={image} alt="" />
      <h1>{header}</h1>
      <h3>{data}</h3>
    </div>
  );
}
