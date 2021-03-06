
export default {
  SET_LIST_PASIEN: (state, data) => {
    state.listPasien = data
  },
  SET_TOTAL_LIST_PASIEN: (state, data) => {
    state.totalList = data
  },
  SET_DETAIL_PASIEN: (state, data) => {
    state.detailPasien = data
  },
  SET_FORM_PASIEN: (state, data) => {
    state.formPasien = data
  },
  RESET_FORM_PASIEN: (state) => {
    state.formPasien.name = ''
    state.formPasien.birth_date = ''
    state.formPasien.age = ''
    state.formPasien.occupation = ''
    state.formPasien.gender = ''
    state.formPasien.nationality = ''
    state.formPasien.nationality_name = ''
    state.formPasien.id_case_national = ''
    state.formPasien.id_case_related = ''
    state.formPasien.phone_number = ''
    state.formPasien.address_street = ''
    state.formPasien.address_district_code = ''
    state.formPasien.address_district_name = ''
    state.formPasien.address_subdistrict_code = ''
    state.formPasien.address_subdistrict_name = ''
    state.formPasien.address_village_code = ''
    state.formPasien.address_village_name = ''
    state.formRiwayatPasien.status = ''
    state.formRiwayatPasien.stage = ''
    state.formRiwayatPasien.diagnosis = []
    state.formRiwayatPasien.history_tracing = []
    state.formRiwayatPasien.history_notes = ''
    state.formRiwayatPasien.current_location_type = 'RUMAH'
    state.formRiwayatPasien.current_location_address = ''
    state.formRiwayatPasien.current_location_district_code = ''
    state.formRiwayatPasien.current_location_subdistrict_code = ''
    state.formRiwayatPasien.current_location_village_code = ''
  },
  RESET_RIWAYAT_FORM_PASIEN: (state) => {
    state.formRiwayatPasien.case = ''
    state.formRiwayatPasien.status = ''
    state.formRiwayatPasien.stage = ''
    state.formRiwayatPasien.diagnosis = []
    state.formRiwayatPasien.history_tracing = []
    state.formRiwayatPasien.history_notes = ''
    state.formRiwayatPasien.current_location_type = 'RUMAH'
    state.formRiwayatPasien.current_location_address = ''
    state.formRiwayatPasien.current_location_district_code = ''
    state.formRiwayatPasien.current_location_subdistrict_code = ''
    state.formRiwayatPasien.current_location_village_code = ''
  }
}
