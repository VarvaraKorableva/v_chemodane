import './SeparatorPage.css'

function SeparatorPage({ color = 'gray', variant = 'wide' }) {
  return (
    <div className="separator_page_container">
      <div
        className={`separator_page_img separator_page_img_${color} separator_page_img_${variant}`}
      ></div>
    </div>
  )
}

export default SeparatorPage