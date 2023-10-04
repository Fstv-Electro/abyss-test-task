
export const ButtonCenterLocation = (children: any, handleAction: () => void) => {
    return (
        <button type='button' className='Button-action' onClick={() => handleAction()}>
            {children}
        </button>
    )
}