import {Helmet} from "react-helmet";

/**
 * Element to display elements in page head.
 *
 * Can be inserted anywhere in the content body.
 * Uses Helmet to propagate data from React root to the <head> elements.
 *
 * @param pageData{PageData}
 * @constructor
 */
function Head({pageData}) {
    return (
        <>{pageData ? (
            <Helmet>
                <title>{pageData.PageTitle}</title>
                <meta name="title" content={pageData.PageMetaTitle}/>
                <meta name="keywords" content={pageData.PageMetaKeywords}/>
            </Helmet>
        ) : (
            <Helmet>
                <title>`Loading...`</title>
            </Helmet>
        )}
        </>
    )
}

export default Head;