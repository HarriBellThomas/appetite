class Location < ActiveRecord::Base

	validates :title, presence: true
	validates :address, presence: true

	geocoded_by :address, latitude: :lat, longitude: :long   # can also be an IP address
	after_validation :geocode          # auto-fetch coordinates

end
