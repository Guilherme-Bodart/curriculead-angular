import { GenderEnum } from 'src/enumerators/gender.enum';
import { IRest } from './rest.interface';

export class User implements IRest {
  className = 'Usuário';

  id: string;
  email: string;
  name: string;
  gender: GenderEnum;
  birthday: Date;
  phone: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  linkedin: string;
  curriculum: string;

  constructor(data?: any) {
    if (data) this.Deserialize(data);
  }

  Serialize() {
    const out = {
      id: this.id,
      email: this.email,
      name: this.name,
      gender: this.gender,
      birthday: this.birthday,
      phone: this.phone,
      state: this.state,
      city: this.city,
      district: this.district,
      street: this.street,
      number: this.number,
      complement: this.complement,
      linkedin: this.linkedin,
      curriculum: this.curriculum,
    };
    return out;
  }

  Deserialize(data: any) {
    if (data) {
      this.id = undefined;
      this.email = data['email'] || '';
      this.name = data['name'] || '';
      this.gender = data['gender'] || GenderEnum.Male;
      this.birthday = data['birthday'] || new Date(2000, 1, 1);
      this.phone = data['phone'] || '';
      this.state = data['state'] || '';
      this.city = data['city'] || '';
      this.district = data['district'] || '';
      this.street = data['street'] || '';
      this.number = data['number'] || '';
      this.complement = data['complement'] || '';
      this.linkedin = data['linkedin'] || '';
      this.curriculum = data['curriculum'] || '';
    }
    return this;
  }
}
