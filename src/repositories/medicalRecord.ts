import api from "../services/api";

export interface IMedicalRecord {
  id: number;
  procedures: string;
  pacient_id: number;
  created_at: string;
  updated_at: string;
}

interface MedicalRecordResponse {
  data: IMedicalRecord[];
  meta: { current_page: number; total: number; last_page: number };
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
  const response = await api.post<{ data: IMedicalRecord }>(
    `/medical_record/${pacient_id}`,
    medicalRecord
  );

  return response.data.data;
};

export const updateMedicalRecordRepository = async (
  medicalRecord: IMedicalRecord
) => {
  const response = await api.put<{ data: IMedicalRecord }>(
    `/medical_record/${medicalRecord.id}`,
    medicalRecord
  );

  return response.data.data;
};
