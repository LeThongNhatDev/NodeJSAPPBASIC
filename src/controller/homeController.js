const connection = require('../config/database');

const indexHomePage = async (req, res) => {
    let [results, fields] = await connection.query(`select * from Users`);
    return res.render('home.ejs', { listUser: results })

}
const createIndex = async (req, res) => {
    res.render('create.ejs')
}
const CreateUser = async (req, res) => {
    let email = req.body.Email;
    let name = req.body.Name;
    let city = req.body.city;

    try {
        let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
            [email, name, city]
        );

        // Nếu thêm thành công, chuyển hướng đến trang /home
        res.redirect('/');
    } catch (error) {
        console.error('Lỗi khi thêm người dùng:', error);
        res.status(500).send('Đã xảy ra lỗi, vui lòng thử lại sau.');
    }
}
const deleteUser = async (req, res) => {
    let userId = req.params.id; // Lấy ID người dùng từ URL

    try {
        let [results, fields] = await connection.query(
            `DELETE FROM Users WHERE id = ?`,
            [userId]
        );

        // Nếu xóa thành công, chuyển hướng về trang chủ
        res.redirect('/');
    } catch (error) {
        console.error('Lỗi khi xóa người dùng:', error);
        res.status(500).send('Đã xảy ra lỗi khi xóa, vui lòng thử lại sau.');
    }
}
const indexDetailUser = async (req, res) => {
    let userId = req.params.id; // Lấy ID người dùng từ URL
    try {
        let [results, fields] = await connection.query(
            `SELECT * FROM Users WHERE id = ?`, [userId]
        );


        res.render('detail-user.ejs', { dataUser: results[0] });
        console.log(results);
    } catch (error) {
        console.error('Lỗi khi xem chi tiết:', error);
        res.status(500).send('Đã xảy ra lỗi khi xóa, vui lòng thử lại sau.');
    }
    // res.render('detail-user.ejs');

}
const updateUser = async (req, res) => {
    let userId = req.body.id; // Lấy ID người dùng từ URL
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    try {
        let [results, fields] = await connection.query(
            `UPDATE Users SET email = ?,name = ?,city = ? WHERE id = ?`, [email, name, city, userId]
        );
        res.redirect(`/detail-user/${userId}`)
    } catch (error) {
        console.error('Lỗi khi cập nhật:', error);
        res.status(500).send('Đã xảy ra lỗi khi xóa, vui lòng thử lại sau.');
    }
}
module.exports = {
    indexHomePage,
    CreateUser,
    createIndex,
    deleteUser,
    indexDetailUser,
    updateUser
}