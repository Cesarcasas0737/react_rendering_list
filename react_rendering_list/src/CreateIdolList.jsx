import { idols } from './idols.jsx';
import { getImageUrl } from './utils.jsx';
import './CreateIdolList.css'

export default function List() {

  const listItems = idols.map(idol =>
    <div className='idolContainer' key={idol.id}>
      <img className='idolImage'
        src={getImageUrl(idol)}
        alt={idol.stageName}
      />
      <p>
        <b>{idol.stageName} from {idol.group}</b>
        <li>Nationality: {idol.nationality}</li>
        <li>MBTI: {idol.mbti}</li>
        <li>Height: {idol.height +"cm"}</li>
        <li>Weight: {idol.weight+ "kg"}</li>
      </p>
    </div>
  );

  return <ul>{listItems}</ul>;
}
