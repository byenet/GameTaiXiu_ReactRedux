import React, { Component } from 'react';
import './BaiTapGameXucXac.css';
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import {connect} from 'react-redux';

class BaiTapGameXucXac extends Component {
    render() {
        return (
          <div
            // Cach style de anh trong file css thong thuong phai tao 1 thu muc chua anh de dong bo
            className="game"
            // cach style de anh trong public
            // style={{ backgroundImage: "url('./img/gameXucXac/bgGame.png')" }}
          >
            <div className=" container">
              <div className="title-game text-center my-5">GAME ĐỔ XÚC XẮC</div>
              <div className="row text-center">
                <div className="col-4 btn-xx">
                  <button onClick={() => {
                    // this.props.datCuoc()
                    this.props.datCuoc(true)
                  }} className="btn btn-success ml-5">Tài</button>
                </div>
                <div className="col-4">
                  <XucXac />
                </div>
                <div onClick={()=> {
                  this.props.datCuoc(false)
                }} className="col-4 btn-xx">
                  <button className="btn btn-success mr-5">Xỉu</button>
                </div>
              </div>

              <div className="thongTinTroChoi text-center">
                <ThongTinTroChoi/>
                <button onClick={()=>{this.props.playGame()}} className="btn btn-success py-2 px-4 mt-1">
                    Play game
                </button>
              </div>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      // alert('vao roi')

      // tao action taiXiu
      let action = {
        type: 'DAT_CUOC',
        taiXiu
      }
      // Gui len reducer
      dispatch(action);
    },

  
    playGame: () => {
      // Gui du lieu type PLAY_GAME (da click nut play) len reducer
      dispatch({
        type: 'PLAY_GAME'
      })
    }
  }
}


export default connect(null,mapDispatchToProps)(BaiTapGameXucXac)