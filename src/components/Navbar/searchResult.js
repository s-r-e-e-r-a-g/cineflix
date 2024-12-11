export const searchResult = (searchKey, searchLink, media_type) => {
    fetch(`${searchLink}${searchKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            return data.results;
        })
}

