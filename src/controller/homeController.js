const indexHomePage = (req, res) => {
    res.send('Hello World! Nhất');
}
const pageAbc = (req, res) => {
    res.send('Get trang abc');
}
const cccd = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    indexHomePage,
    pageAbc,
    cccd
}