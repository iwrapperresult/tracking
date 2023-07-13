export interface DriverDto {
  package_id: String ,
  pickup_time: String ,
  start_time: String ,
  end_time: String ,
  to_address:String,
  location: {
    lat: Number ,
    lng: Number
  },
  status: String
}
