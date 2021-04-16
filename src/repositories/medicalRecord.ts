import api from "../services/api";

export interface IMedicalRecord {
  id: number;
  procedures: string;
  pacient_id: number;
  created_at: string;
  updated_at: string;
}

interface MedicalRecordResponse {
  medicalRecord: IMedicalRecord[];
  page: number;
  total: number;
  lastPage: number;
}

interface MedicalRecordParams {
  page: number;
  pacient_id: number;
}

export const showMedicalRecordRepository = async ({
  page,
  pacient_id,
}: MedicalRecordParams) => {
  const response = await api.get<MedicalRecordResponse>(
    `/medical_record/${pacient_id}`,
    {
      params: {
        page,
      },
    }
  );

  return response.data;
};

export const createMedicalRecordRepository = async ({
  medicalRecord,
  pacient_id,
}: {
  medicalRecord: IMedicalRecord;
  pacient_id: number;
}) => {
  const response = await api.post<IMedicalRecord>(
    `/medical_record/${pacient_id}`,
    medicalRecord
  );

  return response.data;
};

export const updateMedicalRecordRepository = async (
  medicalRecord: IMedicalRecord
) => {
  const response = await api.put<IMedicalRecord>(
    "/medical_record",
    medicalRecord
  );

  return response.data;
};
