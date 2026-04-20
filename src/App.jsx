import reactLogo from './assets/react.svg'
import styles from './App.module.css'
//ボタンコンポーネント
import { Button } from './components/Button/index'
//Profileコンポーネント
import { Profile } from './components/Profile/index'

export const App = () => {
    return (
        <div>
            <div>
                <img src={reactLogo} className={styles['react-logo']} />
                <h1>Hello React!</h1>
            </div>

            <hr />
            <div>
                <Button />
                <Button />
                <Button />
            </div>
            <hr />
            <Profile />
        </div >
    )
}

