import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames'

import { EXAMPLE_PATH } from '../lib/constants'
import Container from './container'


type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div className="container-fluid">
      <div className="contact_link-container">
        <a href="" className="contact_link1">
          <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: '#e8b602' }} />
          <span className="pl-2">
            Nairobi, Kenya </span>
        </a>
        <a href="" className="contact_link2">
          <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#e8b602' }} />
          <span className="pl-2">
            Call : (+254) 719 230690
          </span>
        </a>
        <a href="mailto:sledgeentertainment8@gmail.com" className="contact_link3">
          <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#e8b602' }} />
          <span className="pl-2">
            sledgeentertainment8@gmail.com
          </span>
        </a>
      </div>
    </div>
  )
}

export default Alert
