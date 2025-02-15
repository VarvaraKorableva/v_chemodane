import './SeparatorPage.css'

function SeparatorPage({color = 'gray'}) {
    return(
        <div className="separator_page_container">
            <div className={`separator_page_img separator_page_img_${color}`}></div>
        </div>
    )
}

export default SeparatorPage