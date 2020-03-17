const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from danhmuc'),
    SP_DM: madm => db.load(`select * from sanpham where MaDM=${madm}`), // chọn ra các sản phẩm thuộc danhmuc 1 2 hoặc 3
    CT_SP: (madm,masp) => db.load(`select * from chitietsp ct,SanPham sp  where sp.MaDM=ct.MaDM and sp.MaSP=ct.MaSP and ct.MaSP=${masp} and ct.MaDM=${madm}`) // chọn ra chi tiết của 1 sản phẩm (thuộc 1 danh mục và 1 mã sản phẩm)
}
