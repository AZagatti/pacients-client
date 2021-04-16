import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  createAvaliationRepository,
  AvaliationForm,
  indexAvaliationRepository,
  updateAvaliationRepository,
} from "../../repositories/avaliation";

import styles from "./styles.module.css";

import Layout from "../../components/Layout";
import InputRadio from "../../components/InputRadio";
import Textarea from "../../components/Textarea";
import { Pacient } from "../../repositories/pacient";
import PaginatedSelectPacients from "../../components/PaginatedSelectPacients";

const Avaliation = () => {
  const [result, setResult] = useState<"success" | "error" | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const [pacient, setPacient] = useState<Pacient>();
  const [initialAvaliation, setInitialAvaliation] = useState<AvaliationForm>();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AvaliationForm>();
  const onSubmit = async (data: AvaliationForm) => {
    try {
      setIsLoading(true);

      if (!pacient?.id) throw new Error();

      if (initialAvaliation) {
        await updateAvaliationRepository({ ...initialAvaliation, ...data });
        setResult("success");
      } else {
        await createAvaliationRepository({
          avaliation: data,
          pacient_id: pacient.id,
        });
        reset();
        setResult("success");
      }
    } catch (err) {
      setResult("error");
    } finally {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (!pacient?.id) return;

        const data = await indexAvaliationRepository(pacient.id);
        for (const objK in data) {
          const key = objK as keyof AvaliationForm;
          setValue(key, data[key]);
        }
        setInitialAvaliation(data);
      } catch (err) {
        setInitialAvaliation(undefined);
        reset();
      }
    })();
  }, [pacient?.id, setValue, reset, result]);

  useEffect(() => {
    setTimeout(() => {
      setResult(undefined);
    }, 4000);
  }, [result]);

  const getMessages = () => {
    if (initialAvaliation) {
      return {
        error: "Erro ao atualizar avaliação",
        success: "Sucesso ao atualizar avaliação",
      };
    }
    return {
      error: "Erro ao cadastrar avaliação.",
      success: "Sucesso ao cadastrar avaliação.",
    };
  };

  return (
    <Layout
      messages={getMessages()}
      result={result}
      title="Avaliação do Paciente"
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <PaginatedSelectPacients
          value={pacient}
          onChange={setPacient}
        />

        <h2 className={styles.h2}>
          {initialAvaliation ? "Atualizar avaliação" : "Cadastrar informação"}
        </h2>
        <div className={styles.gridTwo}>
          <Textarea
            label="1. Queixa Principal"
            id="main_complaint"
            error={!!errors?.main_complaint}
            {...register("main_complaint", { required: true })}
          />
          <Textarea
            label="2. História da doença atual"
            id="history_disease"
            error={!!errors?.history_disease}
            {...register("history_disease", { required: true })}
          />
        </div>

        <h3 className={styles.h3}>3.1 Questionário de saúde</h3>
        <div className={styles.gridThree}>
          <InputRadio
            title="1. Já teve hemorragia?"
            id="is_bleeding"
            error={!!errors?.is_bleeding}
            {...register("is_bleeding", { required: true })}
          />
          <InputRadio
            title="2. Sofre(u) de alergia?"
            id="is_allergic"
            error={!!errors?.is_allergic}
            {...register("is_allergic", { required: true })}
          />
          <InputRadio
            title="3. Teve reumatismo infeccioso?"
            id="is_infectious_rheumatism"
            error={!!errors?.is_infectious_rheumatism}
            {...register("is_infectious_rheumatism", { required: true })}
          />
          <InputRadio
            title="4. Sofre(u) de distúrbio cardiovascular?"
            id="is_cardiovascular_disorder"
            error={!!errors?.is_cardiovascular_disorder}
            {...register("is_cardiovascular_disorder", { required: true })}
          />
          <InputRadio
            title="5. Sofre(u) de gastrite?"
            id="is_gastritis"
            error={!!errors?.is_gastritis}
            {...register("is_gastritis", { required: true })}
          />
          <InputRadio
            title="6. É diabético ou tem familiares diabéticos? "
            id="is_diabetic"
            error={!!errors?.is_diabetic}
            {...register("is_diabetic", { required: true })}
          />
          <InputRadio
            title="7. Já desmaiou alguma vez?"
            id="is_fainting"
            error={!!errors?.is_fainting}
            {...register("is_fainting", { required: true })}
          />
          <InputRadio
            title="8.Está sob tratamento médico?"
            id="is_medical_treatment"
            error={!!errors?.is_medical_treatment}
            {...register("is_medical_treatment", { required: true })}
          />
          <InputRadio
            title="9. Está tomando algum medicamento?"
            id="is_medicines"
            error={!!errors?.is_medicines}
            {...register("is_medicines", { required: true })}
          />
          <InputRadio
            title="10. Esteve doente ou foi operado nos últimos 5 anos?"
            id="is_operated"
            error={!!errors?.is_operated}
            {...register("is_operated", { required: true })}
          />
          <InputRadio
            title="11. Tem hábitos, vícios ou manias?"
            id="is_addictions"
            error={!!errors?.is_addictions}
            {...register("is_addictions", { required: true })}
          />
          <InputRadio
            title="12. Tem ansiedade/depressão?"
            id="is_anxiety_or_depression"
            error={!!errors?.is_anxiety_or_depression}
            {...register("is_anxiety_or_depression", { required: true })}
          />
        </div>

        <h4>13. Você e/ou algum familiar teve algumas dessas doenças</h4>
        <div className={styles.gridThree}>
          <InputRadio
            title="Tuberculose"
            id="is_tuberculosis"
            error={!!errors?.is_tuberculosis}
            {...register("is_tuberculosis", { required: true })}
          />
          <InputRadio
            title="Sífilis"
            id="is_syphilis"
            error={!!errors?.is_syphilis}
            {...register("is_syphilis", { required: true })}
          />
          <InputRadio
            title="Hepatite A, B, C"
            id="is_hepatitis"
            error={!!errors?.is_hepatitis}
            {...register("is_hepatitis", { required: true })}
          />
          <InputRadio
            title="SIDA/AIDS"
            id="is_aids"
            error={!!errors?.is_aids}
            {...register("is_aids", { required: true })}
          />
          <InputRadio
            title="Sarampo"
            id="is_measles"
            error={!!errors?.is_measles}
            {...register("is_measles", { required: true })}
          />
          <InputRadio
            title="Caxumba"
            id="is_mumps"
            error={!!errors?.is_mumps}
            {...register("is_mumps", { required: true })}
          />
          <InputRadio
            title="Varícela"
            id="is_varicella"
            error={!!errors?.is_varicella}
            {...register("is_varicella", { required: true })}
          />
          <InputRadio
            title="Outras"
            id="is_others"
            error={!!errors?.is_others}
            {...register("is_others", { required: true })}
          />
          <Input
            type="text"
            label="Outras:"
            id="others"
            error={!!errors?.others}
            {...register("others")}
          />

          <InputRadio
            title="14. É fumante?"
            id="is_smoker"
            error={!!errors?.is_smoker}
            {...register("is_smoker", { required: true })}
          />
          <Input
            type="text"
            label="Frequência que fuma"
            id="smoking_frequency"
            error={!!errors?.smoking_frequency}
            {...register("smoking_frequency")}
          />
        </div>

        <h3 className={styles.h3}>
          3.2 Questionário complementar infantil - ODONTOPEDIATRIA
        </h3>
        <div className={styles.gridThree}>
          <Input
            type="text"
            label="História da gestação"
            id="childish_history_gestation"
            error={!!errors?.childish_history_gestation}
            {...register("childish_history_gestation")}
          />
          <Input
            type="text"
            label="Nasceu de parto"
            placeholder="Normal, a fórceps ou cesariana"
            id="childish_childbirth"
            error={!!errors?.childish_childbirth}
            {...register("childish_childbirth")}
          />
          <InputRadio
            title="A criança teve algum problema no parto?"
            id="childish_childbirth_problems"
            error={!!errors?.childish_childbirth_problems}
            {...register("childish_childbirth_problems")}
          />
          <Input
            type="text"
            label="A amamentação foi"
            placeholder="Natural ou mamadeira"
            id="childish_breast_feeding"
            error={!!errors?.childish_breast_feeding}
            {...register("childish_breast_feeding")}
          />
          <Input
            type="number"
            label="até a idade de"
            placeholder="Idade que parou de mamar"
            id="childish_breast_feeding_age"
            error={!!errors?.childish_breast_feeding_age}
            {...register("childish_breast_feeding_age")}
          />
          <InputRadio
            title="Já lhe foi dito para não tomar anestesia local?"
            id="childish_local_anesthesia"
            error={!!errors?.childish_local_anesthesia}
            {...register("childish_local_anesthesia")}
          />
          <InputRadio
            title="Já teve ou viveu com alguém que tivesse doença grave e contagiosa?"
            id="childish_serious_disease"
            error={!!errors?.childish_serious_disease}
            {...register("childish_serious_disease")}
          />
          <InputRadio
            title="A criança já foi vacinada?"
            id="childish_vaccinated"
            error={!!errors?.childish_vaccinated}
            {...register("childish_vaccinated")}
          />
          <Input
            type="text"
            label="Durante os 2 primeiros anos de vida:"
            placeholder="Sentou, engatinhou, andou, falou"
            id="childish_first_two_yers"
            error={!!errors?.childish_first_two_yers}
            {...register("childish_first_two_yers")}
          />
          <InputRadio
            title="No lar e na escola: teve alguma dificuldade no aprendizado?"
            id="childish_learning_difficulty"
            error={!!errors?.childish_learning_difficulty}
            {...register("childish_learning_difficulty")}
          />
          <Input
            type="text"
            label="Estado anímico"
            placeholder="Alegre, triste, tímido, tranquilo, inquieto, assustado"
            id="childish_soulful"
            error={!!errors?.childish_soulful}
            {...register("childish_soulful")}
          />
          <Input
            type="text"
            label="Tem sono:"
            placeholder="Tranquilo, intranquilo, terror noturno, pesadelos, sonambulismo, insônia"
            id="childish_sleep"
            error={!!errors?.childish_sleep}
            {...register("childish_sleep")}
          />
          <Input
            type="text"
            label="Conduta psicomotora:"
            placeholder="Postura normal, alterada, foanção normal, distúrbios da fala, alguma paralisia, enurese noturna, descontrole esfíncteres"
            id="childish_psychomotor"
            error={!!errors?.childish_psychomotor}
            {...register("childish_psychomotor")}
          />
          <Input
            type="text"
            label="Alimentação:"
            placeholder="Rejeita, alimenta-se normalmente, supra alimenta-se"
            id="childish_feeding"
            error={!!errors?.childish_feeding}
            {...register("childish_feeding")}
          />
          <Input
            type="text"
            label="Sociabilidade:"
            placeholder="Isolada, agressiva, relações normais"
            id="childish_sociability"
            error={!!errors?.childish_sociability}
            {...register("childish_sociability")}
          />
          <Input
            type="text"
            label="Apresenta alguma patologia de conduta:"
            placeholder="Tiques, fobias, ansiedade, medo, birra, ciúmes"
            id="childish_conduct_pathology"
            error={!!errors?.childish_conduct_pathology}
            {...register("childish_conduct_pathology")}
          />
          <Input
            type="text"
            label="Observações:"
            id="childish_comments"
            error={!!errors?.childish_comments}
            {...register("childish_comments")}
          />
        </div>

        <h3 className={styles.h3}>4. Exame Físico</h3>
        <span>N=Normal / A=Alterado</span>
        <div className={styles.gridThree}>
          <Input
            type="text"
            label="Lábios"
            id="lips"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.lips}
            maxLength={1}
            {...register("lips", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Mucosa Alveolar"
            id="alveolar_mucosa"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.alveolar_mucosa}
            maxLength={1}
            {...register("alveolar_mucosa", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Mucosa Jugal"
            id="mucosa_ugal"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.mucosa_ugal}
            maxLength={1}
            {...register("mucosa_ugal", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Gengivas"
            id="gums"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.gums}
            maxLength={1}
            {...register("gums", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Língua"
            id="tongue"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.tongue}
            maxLength={1}
            {...register("tongue", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Glândulas Salivares"
            id="salivary_glands"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.salivary_glands}
            maxLength={1}
            {...register("salivary_glands", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Soalho da Boca"
            id="mouth_floor"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.mouth_floor}
            maxLength={1}
            {...register("mouth_floor", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Linfonodos"
            id="lymph_nodes"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.lymph_nodes}
            maxLength={1}
            {...register("lymph_nodes", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Palato duro"
            id="hard_palate"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.hard_palate}
            maxLength={1}
            {...register("hard_palate", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="ATM"
            id="atm"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.atm}
            maxLength={1}
            {...register("atm", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Garganta"
            id="throat"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.throat}
            maxLength={1}
            {...register("throat", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Músculos Mastigadores"
            id="chewing_muscles"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.chewing_muscles}
            maxLength={1}
            {...register("chewing_muscles", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Palato mole"
            id="soft_palate"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.soft_palate}
            maxLength={1}
            {...register("soft_palate", { required: true, maxLength: 1 })}
          />
          <Input
            type="text"
            label="Oclusão"
            id="occlusion"
            placeholder="N=normal / A=Alterado"
            error={!!errors?.occlusion}
            maxLength={1}
            {...register("occlusion", { required: true, maxLength: 1 })}
          />
        </div>
        <Textarea
          label="Alterações encontradas:"
          id="changes_found"
          error={!!errors?.changes_found}
          {...register("changes_found", { required: true })}
        />

        <h3 className={styles.h3}>5. Pressão Arterial</h3>

        <div className={styles.gridTwo}>
          <Input
            type="number"
            label="Pressão arterial mínima:"
            id="min_blood_pressure"
            placeholder="mmHG"
            error={!!errors?.min_blood_pressure}
            {...register("min_blood_pressure", { required: true })}
          />
          <Input
            type="number"
            label="Pressão arterial máxima:"
            id="max_blood_pressure"
            placeholder="mmHG"
            error={!!errors?.max_blood_pressure}
            {...register("max_blood_pressure", { required: true })}
          />
        </div>

        <div className={styles.flex}>
          <Textarea
            label="Diagnóstico presuntivo"
            id="presumptive_diagnosis"
            error={!!errors?.presumptive_diagnosis}
            {...register("presumptive_diagnosis", { required: true })}
          />
          <Textarea
            label="Exames complementares"
            id="complementary_exams"
            error={!!errors?.complementary_exams}
            {...register("complementary_exams", { required: true })}
          />
          <Textarea
            label="Diagnóstico definitivo"
            id="definitive_diagnosis"
            error={!!errors?.definitive_diagnosis}
            {...register("definitive_diagnosis", { required: true })}
          />
          <Textarea
            label="Tratamento/Proservação"
            id="treatment"
            error={!!errors?.treatment}
            {...register("treatment", { required: true })}
          />
          <Textarea
            label="Plano de tratamento"
            id="treatment_plan"
            error={!!errors?.treatment_plan}
            {...register("treatment_plan", { required: true })}
          />

          <InputRadio
            title="Atendimento de Urgência (Estágio Sup. em Clínica Odontológica Integrada – URGÊNCIA)"
            id="is_urgency"
            {...register("is_urgency", { required: true })}
          />
        </div>

        <div className={styles.gridTwo}>
          <InputRadio
            title="Medicação"
            id="medication"
            error={!!errors?.medication}
            {...register("medication", { required: true })}
          />
          <Input
            type="text"
            label="Descrição da medicação"
            id="medication_description"
            error={!!errors?.medication_description}
            {...register("medication_description")}
          />
        </div>

        <Button disabled={isLoading} type="submit" text="Salvar" />
      </form>
    </Layout>
  );
};

export default Avaliation;
