/**
 * Component to show page title
 *
 * Class: an <h1> element with class name "title"
 *
 * @param pageData{PageData|SiteData}
 * @returns {JSX.Element}
 * @constructor
 */
function Title({pageData}) {
    return (
        <>
            {pageData && pageData.ShowTitle && (
                <h1 className="title">{pageData && pageData.PageTitle}</h1>
            )}
        </>
    )
}

export default Title;