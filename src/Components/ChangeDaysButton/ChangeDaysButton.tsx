import './ChangeDaysButton.css'

export const ChangeDaysButton = ({ openChanger }: { openChanger: () => void }) => {

    return (
        <button onClick={openChanger} className='change-days-button'>Изменить дату</button>
    )
}