
import { resFont } from "./UIUtils"
import Poppins from './fonts/index'

const Fonts = {
    H36: {
        fontFamily: Poppins.bold,
        fontSize: resFont(36),
        lineHeight: resFont(36) * 1.25,
      },
    H32: {
    fontFamily: Poppins.bold,
    fontSize: resFont(32),
    lineHeight: 32 * 1.25,
  },
  H28: {
    fontFamily: Poppins.bold,
    fontSize: resFont(28),
    lineHeight: resFont(28) * 1.25,
  },
  H24: {
    fontFamily: Poppins.bold,
    fontSize: resFont(24), //24
    lineHeight: resFont(24) * 1.25,
  },
  H22: {
    fontFamily: Poppins.bold,
    fontSize: resFont(22),
    lineHeight: resFont(22) * 1.25,
  },
  H20: {
    fontFamily: Poppins.bold,
    fontSize: resFont(20), //20
    lineHeight: resFont(20) * 1.25,
  },
  H18: {
    fontFamily: Poppins.PoppinsSemiBold,
    fontSize: resFont(18),
    lineHeight: resFont(18) * 1.25,
  },
  H16: {
    fontFamily: Poppins.PoppinsSemiBold,
    fontSize: resFont(16),
    lineHeight: resFont(16) * 1.25,
  },
  H12: {
    fontFamily: Poppins.PoppinsSemiBold,
    fontSize: resFont(12),
    lineHeight: resFont(12) * 1.25,
  },
  H14: {
    fontFamily: Poppins.PoppinsRegular,
    fontSize: resFont(14),
    lineHeight: resFont(14) * 1.25,
  },
  H10:{
    fontFamily: Poppins.PoppinsRegular,
    fontSize: resFont(10),
    lineHeight: resFont(10) * 1.25,
  },

  Poppins_400Regular: {
    fontFamily: Poppins.PoppinsRegular,
  },
  Poppins_600SemiBold: {
    fontFamily: Poppins.PoppinsSemiBold,
  },
  Poppins_700Bold: {
    fontFamily: Poppins.bold,
  },
}

export {
    Fonts
}