import { idols } from './idols.jsx';
import { getImageUrl } from './utils.jsx';

export default function List() {

  const listItems = idols.map(idol =>
    <li key={idol.id}>
      <img
        src={getImageUrl(idol)}
        alt={idol.stageName}
      />
      <p>
        <b>{idol.stageName}</b>
          {' ' + idol.nationality + ' '}
          known for {idol.mbti}
      </p>
    </li>
  );

  return <ul>{listItems}</ul>;
}
