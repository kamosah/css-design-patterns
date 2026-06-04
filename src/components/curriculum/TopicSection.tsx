import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Topic } from "../../types/challenge";
import s from "./TopicSection.module.css";

interface TopicSectionProps {
  topic: Topic;
  defaultOpen?: boolean;
}

export function TopicSection({ topic, defaultOpen = true }: TopicSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <button className={s.header} onClick={() => setIsOpen((v) => !v)}>
        <div className={s.headerLeft}>
          <span className={s.toggleIcon}>{isOpen ? "−" : "+"}</span>
          <span className={s.title}>{topic.title}</span>
        </div>
        <span className={s.count}>
          {topic.challenges.length} challenge
          {topic.challenges.length !== 1 ? "s" : ""}
        </span>
      </button>

      {isOpen && (
        <div className={s.grid}>
          {topic.patternIntro && (
            <button
              className={s.card}
              onClick={() => navigate(`/topic/${topic.id}`)}
            >
              <span className={s.cardTitle}>Pattern Introduction</span>
              <span className={s.badge} data-difficulty="intro">
                intro
              </span>
            </button>
          )}
          {topic.challenges.map((challenge) => (
            <button
              key={challenge.id}
              className={s.card}
              onClick={() => navigate(`/challenge/${topic.id}/${challenge.id}`)}
            >
              <span className={s.cardTitle}>{challenge.title}</span>
              <span className={s.badge} data-difficulty={challenge.difficulty}>
                {challenge.difficulty}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
