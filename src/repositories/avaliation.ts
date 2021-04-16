import api from "../services/api";

export interface Avaliation {
  main_complaint: string;
  history_disease: string;
  is_bleeding: boolean;
  is_allergic: boolean;
  is_infectious_rheumatism: boolean;
  is_cardiovascular_disorder: boolean;
  is_gastritis: boolean;
  is_diabetic: boolean;
  is_fainting: boolean;
  is_medical_treatment: boolean;
  is_medicines: boolean;
  is_operated: boolean;
  is_addictions: boolean;
  is_anxiety_or_depression: boolean;
  is_tuberculosis: boolean;
  is_syphilis: boolean;
  is_hepatitis: boolean;
  is_aids: boolean;
  is_measles: boolean;
  is_mumps: boolean;
  is_varicella: boolean;
  is_others: boolean;
  others: string;
  is_smoker: boolean;
  smoking_frequency?: string;
  childish_history_gestation?: string;
  childish_childbirth?: string;
  childish_childbirth_problems?: boolean;
  childish_breast_feeding?: string;
  childish_breast_feeding_age?: number;
  childish_local_anesthesia?: boolean;
  childish_serious_disease?: boolean;
  childish_vaccinated?: boolean;
  childish_first_two_yers?: string;
  childish_learning_difficulty?: string;
  childish_soulful?: string;
  childish_sleep?: string;
  childish_psychomotor?: string;
  childish_feeding?: string;
  childish_sociability?: string;
  childish_conduct_pathology?: string;
  childish_comments?: string;
  lips: string;
  alveolar_mucosa: string;
  mucosa_ugal: string;
  gums: string;
  tongue: string;
  salivary_glands: string;
  mouth_floor: string;
  lymph_nodes: string;
  hard_palate: string;
  atm: string;
  throat: string;
  chewing_muscles: string;
  soft_palate: string;
  occlusion: string;
  changes_found: string;
  min_blood_pressure: string;
  max_blood_pressure: string;
  presumptive_diagnosis: string;
  complementary_exams: string;
  definitive_diagnosis: string;
  treatment: string;
  treatment_plan: string;
  is_urgency: boolean;
  medication: boolean;
  medication_description?: string;
  pacient_id: number;
  created_at: string;
  updated_at: string;
}

type AvaliationWithoutBoolean = Omit<
  Avaliation,
  | "is_bleeding"
  | "is_allergic"
  | "is_infectious_rheumatism"
  | "is_cardiovascular_disorder"
  | "is_gastritis"
  | "is_diabetic"
  | "is_fainting"
  | "is_medical_treatment"
  | "is_medicines"
  | "is_operated"
  | "is_addictions"
  | "is_anxiety_or_depression"
  | "is_tuberculosis"
  | "is_syphilis"
  | "is_hepatitis"
  | "is_aids"
  | "is_measles"
  | "is_mumps"
  | "is_varicella"
  | "is_others"
  | "is_smoker"
  | "childish_childbirth_problems"
  | "childish_local_anesthesia"
  | "childish_serious_disease"
  | "childish_vaccinated"
  | "is_urgency"
  | "medication"
>;

export interface AvaliationForm extends AvaliationWithoutBoolean {
  is_bleeding: string;
  is_allergic: string;
  is_infectious_rheumatism: string;
  is_cardiovascular_disorder: string;
  is_gastritis: string;
  is_diabetic: string;
  is_fainting: string;
  is_medical_treatment: string;
  is_medicines: string;
  is_operated: string;
  is_addictions: string;
  is_anxiety_or_depression: string;
  is_tuberculosis: string;
  is_syphilis: string;
  is_hepatitis: string;
  is_aids: string;
  is_measles: string;
  is_mumps: string;
  is_varicella: string;
  is_others: string;
  is_smoker: string;
  childish_childbirth_problems: string;
  childish_local_anesthesia: string;
  childish_serious_disease: string;
  childish_vaccinated: string;
  is_urgency: string;
  medication: string;
}

export interface Params {
  avaliation: AvaliationForm;
  pacient_id: number;
}

const serializeAvaliation = (avaliation: AvaliationForm): Avaliation => {
  return {
    ...avaliation,
    is_bleeding: avaliation.is_bleeding === "true",
    is_allergic: avaliation.is_allergic === "true",
    is_infectious_rheumatism: avaliation.is_infectious_rheumatism === "true",
    is_cardiovascular_disorder:
      avaliation.is_cardiovascular_disorder === "true",
    is_gastritis: avaliation.is_gastritis === "true",
    is_diabetic: avaliation.is_diabetic === "true",
    is_fainting: avaliation.is_fainting === "true",
    is_medical_treatment: avaliation.is_medical_treatment === "true",
    is_medicines: avaliation.is_medicines === "true",
    is_operated: avaliation.is_operated === "true",
    is_addictions: avaliation.is_addictions === "true",
    is_anxiety_or_depression: avaliation.is_anxiety_or_depression === "true",
    is_tuberculosis: avaliation.is_tuberculosis === "true",
    is_syphilis: avaliation.is_syphilis === "true",
    is_hepatitis: avaliation.is_hepatitis === "true",
    is_aids: avaliation.is_aids === "true",
    is_measles: avaliation.is_measles === "true",
    is_mumps: avaliation.is_mumps === "true",
    is_varicella: avaliation.is_varicella === "true",
    is_others: avaliation.is_others === "true",
    is_smoker: avaliation.is_smoker === "true",
    childish_childbirth_problems:
      avaliation.childish_childbirth_problems === "true",
    childish_local_anesthesia: avaliation.childish_local_anesthesia === "true",
    childish_serious_disease: avaliation.childish_serious_disease === "true",
    childish_vaccinated: avaliation.childish_vaccinated === "true",
    is_urgency: avaliation.is_urgency === "true",
    medication: avaliation.medication === "true",
  };
};

const deserializeAvaliation = (avaliation: Avaliation): AvaliationForm => {
  return {
    ...avaliation,
    is_bleeding: avaliation.is_bleeding ? "true" : "",
    is_allergic: avaliation.is_allergic ? "true" : "",
    is_infectious_rheumatism: avaliation.is_infectious_rheumatism ? "true" : "",
    is_cardiovascular_disorder: avaliation.is_cardiovascular_disorder
      ? "true"
      : "",
    is_gastritis: avaliation.is_gastritis ? "true" : "",
    is_diabetic: avaliation.is_diabetic ? "true" : "",
    is_fainting: avaliation.is_fainting ? "true" : "",
    is_medical_treatment: avaliation.is_medical_treatment ? "true" : "",
    is_medicines: avaliation.is_medicines ? "true" : "",
    is_operated: avaliation.is_operated ? "true" : "",
    is_addictions: avaliation.is_addictions ? "true" : "",
    is_anxiety_or_depression: avaliation.is_anxiety_or_depression ? "true" : "",
    is_tuberculosis: avaliation.is_tuberculosis ? "true" : "",
    is_syphilis: avaliation.is_syphilis ? "true" : "",
    is_hepatitis: avaliation.is_hepatitis ? "true" : "",
    is_aids: avaliation.is_aids ? "true" : "",
    is_measles: avaliation.is_measles ? "true" : "",
    is_mumps: avaliation.is_mumps ? "true" : "",
    is_varicella: avaliation.is_varicella ? "true" : "",
    is_others: avaliation.is_others ? "true" : "",
    is_smoker: avaliation.is_smoker ? "true" : "",
    childish_childbirth_problems: avaliation.childish_childbirth_problems
      ? "true"
      : "",
    childish_local_anesthesia: avaliation.childish_local_anesthesia
      ? "true"
      : "",
    childish_serious_disease: avaliation.childish_serious_disease ? "true" : "",
    childish_vaccinated: avaliation.childish_vaccinated ? "true" : "",
    is_urgency: avaliation.is_urgency ? "true" : "",
    medication: avaliation.medication ? "true" : "",
  };
};

export const createAvaliationRepository = async ({
  avaliation,
  pacient_id,
}: Params) => {
  const body = serializeAvaliation(avaliation);
  const response = await api.post<Avaliation>(
    `/avaliation/${pacient_id}`,
    body
  );

  return response.data;
};

export const indexAvaliationRepository = async (pacient_id: number) => {
  const response = await api.get<Avaliation>(`avaliation/${pacient_id}`);

  return deserializeAvaliation(response.data);
};

export const updateAvaliationRepository = async (avaliation: AvaliationForm) => {
  const body = serializeAvaliation(avaliation);
  const response = await api.put<Avaliation>("/avaliation/", body);

  return response.data;
};
