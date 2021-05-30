import api from "../services/api";

export interface Avaliation {
  id: string;
  main_complaint: string;
  history_disease: string;
  is_bleeding: string | boolean;
  is_allergic: string | boolean;
  is_infectious_rheumatism: string | boolean;
  is_cardiovascular_disorder: string | boolean;
  is_gastritis: string | boolean;
  is_diabetic: string | boolean;
  is_fainting: string | boolean;
  is_medical_treatment: string | boolean;
  is_medicines: string | boolean;
  is_operated: string | boolean;
  is_addictions: string | boolean;
  is_anxiety_or_depression: string | boolean;
  is_tuberculosis: string | boolean;
  is_syphilis: string | boolean;
  is_hepatitis: string | boolean;
  is_aids: string | boolean;
  is_measles: string | boolean;
  is_mumps: string | boolean;
  is_varicella: string | boolean;
  is_others: string | boolean;
  others: string;
  is_smoker: string | boolean;
  smoking_frequency?: string;
  childish_history_gestation?: string | null;
  childish_childbirth?: string | null;
  childish_childbirth_problems?: string | boolean | null;
  childish_breast_feeding?: string | null;
  childish_breast_feeding_age?: number | null;
  childish_local_anesthesia?: string | boolean | null;
  childish_serious_disease?: string | boolean | null;
  childish_vaccinated?: string | boolean | null;
  childish_first_two_yers?: string | null;
  childish_learning_difficulty?: string | null;
  childish_soulful?: string | null;
  childish_sleep?: string | null;
  childish_psychomotor?: string | null;
  childish_feeding?: string | null;
  childish_sociability?: string | null;
  childish_conduct_pathology?: string | null;
  childish_comments?: string | null;
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
  is_urgency: string | boolean;
  medication: string | boolean;
  medication_description?: string;
  pacient_id: number;
  created_at: string;
  updated_at: string;
}

export interface Params {
  avaliation: Avaliation;
  pacient_id: number;
}

const serializeAvaliation = (avaliation: Avaliation): Avaliation => {
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
    childish_breast_feeding: avaliation.childish_breast_feeding
      ? avaliation.childish_breast_feeding
      : null,
    childish_breast_feeding_age: avaliation.childish_breast_feeding_age
      ? avaliation.childish_breast_feeding_age
      : null,
    childish_childbirth: avaliation.childish_childbirth
      ? avaliation.childish_childbirth
      : null,
    childish_comments: avaliation.childish_comments
      ? avaliation.childish_comments
      : null,
    childish_conduct_pathology: avaliation.childish_conduct_pathology
      ? avaliation.childish_conduct_pathology
      : null,
    childish_feeding: avaliation.childish_feeding
      ? avaliation.childish_feeding
      : null,
    childish_first_two_yers: avaliation.childish_first_two_yers
      ? avaliation.childish_first_two_yers
      : null,
    childish_history_gestation: avaliation.childish_history_gestation
      ? avaliation.childish_history_gestation
      : null,
    childish_psychomotor: avaliation.childish_psychomotor
      ? avaliation.childish_psychomotor
      : null,
    childish_sleep: avaliation.childish_sleep
      ? avaliation.childish_sleep
      : null,
    childish_sociability: avaliation.childish_sociability
      ? avaliation.childish_sociability
      : null,
    childish_soulful: avaliation.childish_soulful
      ? avaliation.childish_soulful
      : null,
  };
};

const deserializeAvaliation = (avaliation: Avaliation): Avaliation => {
  return {
    ...avaliation,
    is_bleeding: avaliation.is_bleeding === "1" ? "true" : "",
    is_allergic: avaliation.is_allergic === "1" ? "true" : "",
    is_infectious_rheumatism:
      avaliation.is_infectious_rheumatism === "1" ? "true" : "",
    is_cardiovascular_disorder:
      avaliation.is_cardiovascular_disorder === "1" ? "true" : "",
    is_gastritis: avaliation.is_gastritis === "1" ? "true" : "",
    is_diabetic: avaliation.is_diabetic === "1" ? "true" : "",
    is_fainting: avaliation.is_fainting === "1" ? "true" : "",
    is_medical_treatment: avaliation.is_medical_treatment === "1" ? "true" : "",
    is_medicines: avaliation.is_medicines === "1" ? "true" : "",
    is_operated: avaliation.is_operated === "1" ? "true" : "",
    is_addictions: avaliation.is_addictions === "1" ? "true" : "",
    is_anxiety_or_depression:
      avaliation.is_anxiety_or_depression === "1" ? "true" : "",
    is_tuberculosis: avaliation.is_tuberculosis === "1" ? "true" : "",
    is_syphilis: avaliation.is_syphilis === "1" ? "true" : "",
    is_hepatitis: avaliation.is_hepatitis === "1" ? "true" : "",
    is_aids: avaliation.is_aids === "1" ? "true" : "",
    is_measles: avaliation.is_measles === "1" ? "true" : "",
    is_mumps: avaliation.is_mumps === "1" ? "true" : "",
    is_varicella: avaliation.is_varicella === "1" ? "true" : "",
    is_others: avaliation.is_others === "1" ? "true" : "",
    is_smoker: avaliation.is_smoker === "1" ? "true" : "",
    childish_childbirth_problems:
      avaliation.childish_childbirth_problems === "1" ? "true" : "",
    childish_local_anesthesia:
      avaliation.childish_local_anesthesia === "1" ? "true" : "",
    childish_serious_disease:
      avaliation.childish_serious_disease === "1" ? "true" : "",
    childish_vaccinated: avaliation.childish_vaccinated === "1" ? "true" : "",
    is_urgency: avaliation.is_urgency === "1" ? "true" : "",
    medication: avaliation.medication === "1" ? "true" : "",
  };
};

export const createAvaliationRepository = async ({
  avaliation,
  pacient_id,
}: Params) => {
  console.log(avaliation.childish_breast_feeding)
  const body = serializeAvaliation(avaliation);
  const response = await api.post<{ data: Avaliation }>(
    `/avaliation/${pacient_id}`,
    body
  );

  return response.data.data;
};

export const indexAvaliationRepository = async (pacient_id: number) => {
  const response = await api.get<{ data: Avaliation }>(
    `avaliation/${pacient_id}`
  );

  return deserializeAvaliation(response.data.data);
};

export const updateAvaliationRepository = async (
  avaliation: Avaliation
) => {
  const body = serializeAvaliation(avaliation);
  const response = await api.put<{ data: Avaliation }>(
    `/avaliation/${avaliation.id}`,
    body
  );

  return response.data.data;
};
