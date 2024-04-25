export default function MainLinks(props: any) {
  return (
    <ul className='main-links'>
      <li
        className='link'
        id='developer'
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.handleClick}
      >
        Web Developer
      </li>
      <li
        className='link'
        id='photographer'
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.handleClick}
      >
        Photographer
      </li>
      <li
        className='link'
        id='pilot'
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.handleClick}
      >
        Drone Pilot
      </li>
    </ul>
  );
}
