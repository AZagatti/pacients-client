import api from "../services/api";

export interface Pacient {
  name: string;
  birthday: string;
  gender: string;
  weight: number;
  height: number;
  ethnicity: string;
  schooling: string;
  occupation: string;
  rg: string;
  cpf: string;
  marital_status: string;
  nationality: string;
  nationality_state: string;
  father: string;
  father_nationality: string;
  mother: string;
  mother_nationality: string;
  contact: string;
  street: string;
  number: number;
  add_on: string;
  district: string;
  city: string;
  cep: string;
  state: string;
  id: number;
  created_at: string;
  updated_at: string;
}

export const createPacientRepository = async (pacient: Pacient) => {
  const response = await api.post<{ data: Pacient }>("/pacients", pacient);

  return response.data.data;
};

export const showPacientsRepository = async (page: number) => {
  const response = await api.get<{
    data: Pacient[];
    meta: {
      current_page: number;
      total: number;
      last_page: number;
    };
  }>("/pacients", {
    params: {
      page,
    },
  });

  return response.data;
};

export const updatePacientRepository = async (pacient: Pacient) => {
  const response = await api.put<{ data: Pacient }>(
    `/pacients/${pacient.id}`,
    pacient
  );

  return response.data.data;
};

export const deletePacientRepository = async (pacient_id: number) => {
  await api.delete(`/pacients/${pacient_id}`);
};
