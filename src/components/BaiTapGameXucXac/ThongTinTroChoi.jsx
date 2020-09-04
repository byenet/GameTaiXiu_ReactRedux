import React, { Component } from "react";
import {connect} from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    let {soBanThang,taiXiu,tongSoBanChoi} = this.props

    return (
      <div>
        <div className="display-3">
          BẠN CHỌN: <span className="text-danger">{taiXiu ? "Tài" : "Xỉu"}</span>
        </div>
        <div className="h1 mt-4">
          SỐ BÀN THẮNG: <span className="text-success">{soBanThang}</span>
        </div>
        <div className="h1">
          TỔNG SỐ BÀN CHƠI: <span className="text-primary">{tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
      taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
      tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi);