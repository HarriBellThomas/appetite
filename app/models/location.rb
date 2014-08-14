class Location < ActiveRecord::Base

	validates :title, presence: true, uniqueness: true
	validates :address, presence: true, uniqueness: true

	geocoded_by :address, latitude: :lat, longitude: :long   # can also be an IP address
	after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

end
