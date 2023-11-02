export interface PlaceInterface {
  id?: number;
  name?: string;
  details?: string;
  type?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  created_at?: Date;
  updated_at?: Date;
  priority?: number;
}

export interface AreaInterface {
  id?: number;
  name?: string;
  details?: string;
  created_at?: Date;
  updated_at?: Date;
  places?: PlaceInterface[];
}
