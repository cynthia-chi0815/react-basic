import reactLogo from './assets/react.svg'
import styles from './App.module.css'
//ボタンコンポーネント
import { Button } from './components/Button/index'
//Profileコンポーネント
import { Profile } from './components/Profile/index'
//Countryコンポーネント
import { Country } from './components/Country/index'
import { Card } from './components/Card/index'
import { TodoItem } from './components/TodoItem/index'
//リストレンダー
import { LanguageList } from './components/LanguageList/index'
//アラートボタンコンポーネント
import { AlertButton } from './components/AlertButton'
//useeStste
import { InputField } from './components/InputField'
//useEffect
import { CharacterImage } from './components/CharacterImage'


export const App = () => {
    const countryInfo = {
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
    };

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
            <hr />
            <Card>
                <Country
                    info={countryInfo}
                    width={120}
                    height={80}
                />
            </Card>
            <hr />
            <ul>
                <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
                <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
                <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
            </ul>
            <hr />
            <LanguageList />
            <hr />
            <AlertButton />
            <hr />
            <InputField />
            <hr />
            <CharacterImage />
        </div >
    )
}

