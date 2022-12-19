
import { RxSpeakerLoud } from  'react-icons/rx'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Styles from './Speaker.module.css'

const Speaker = () =>{
    return (
        <div>
          <div className={Styles.SpeakerMain} >
          <RxSpeakerLoud className={Styles.SpeakerIcon} />
          <p className={Styles.SpeakerP} >Invite Friends and get 200 per referral</p>
          <AiOutlineDoubleRight   className={Styles.SpeakerIcon2} />
          </div>
        </div>
    )
}


export { Speaker }