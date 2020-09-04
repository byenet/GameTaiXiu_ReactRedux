import Swal from "sweetalert2/dist/sweetalert2.js";

const stateDefaults = {
    // Quy ước true la tai (tu 3-11), false la xiu (12 tro len)
    taiXiu: true, 
    mangXucXac : [
        {ma:6, hinhAnh:'./img/gameXucXac/6.png'},
        {ma:1, hinhAnh:'./img/gameXucXac/1.png'},
        {ma:3, hinhAnh:'./img/gameXucXac/3.png'},
        
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const BaiTapGameXucXacReducer = (state = stateDefaults, action) => {
    console.log(action);
    switch (action.type) {
      case "DAT_CUOC": {
        state.taiXiu = action.taiXiu;
        return { ...state };
      }

      case "PLAY_GAME": {
        // Buoc 1 Xu ly random xuc xac
        let mangXucXacNgauNhien = [];
        for (let i = 0; i < 3; i++) {
          // Tao so ngau nhien tu 1 toi 6
          let soNgauNhien = Math.floor(Math.random() * 6) + 1;
          // Tao ra object xuc xac tu so ngau nhien
          let xucXacNgauNhien = {
            ma: soNgauNhien,
            hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          };

          // push xuc xac vao mang xuc xac ngau nhien
          mangXucXacNgauNhien.push(xucXacNgauNhien);
        }
        // Gan state mangXucXac = mangXucXacNgauNhien
        state.mangXucXac = mangXucXacNgauNhien;

        // Xu ly tang ban choi
        state.tongSoBanChoi += 1;

        // Xu ly so ban thang
        let tongSoDiem = state.mangXucXac.reduce((tongDiem,xucXac,index)=> {
            return tongDiem += xucXac.ma
        },0)

        // Xet dieu kien de win game
        // if((tongSoDiem > 11 && state.taiXiu) || (tongSoDiem <= 11 && state.taiXiu === false)){
        //     state.soBanThang += 1;
        // }

        if((tongSoDiem > 11 && state.taiXiu)){
            state.soBanThang += 1;
            Swal.fire({
                icon: "success",
                title: "Chúc Mừng Bạn Đã Đổ Ra Tài!",
                showConfirmButton: false,
                timer: 2000,
            });
        }else if((tongSoDiem <= 11 && state.taiXiu === false)){
            state.soBanThang += 1;
            Swal.fire({
                icon: "success",
                title: "Chúc Mừng Bạn Đã Đổ Ra Xỉu!",
                showConfirmButton: false,
                timer: 2000,
            });
        }else{
            Swal.fire({
                icon: "error",
                title: "Bạn thua mất rồi!",
                showConfirmButton: false,
                timer: 2000,
            });
        }

        return { ...state };
      }

      default:
        return { ...state };
    }
}

// export default -> chi dc export 1 lan trong file va khi import co the rename dc
export default BaiTapGameXucXacReducer;



// Swal.fire({
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500,
// });