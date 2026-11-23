"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Department } from "@/content/home";
import { cn } from "@/lib/cn";

type DepartmentTabsProps = {
  /** Cabeçalho da secção (vem do Server Component). Fica à esquerda das tabs no desktop. */
  heading: React.ReactNode;
  tablistLabel: string;
  responsibilitiesTitle: string;
  items: Department[];
};

/**
 * Tabs dos departamentos — WEB-06.
 * Segue o padrão WAI-ARIA Tabs (https://www.w3.org/WAI/ARIA/apg/patterns/tabs/):
 *  - só a tab ativa entra no Tab do teclado (roving tabindex);
 *  - ←/→ mudam de tab (com volta ao início/fim), Home/End vão para a primeira/última;
 *  - todos os painéis existem no DOM; os inativos ficam com `hidden`.
 */
export function DepartmentTabs({
  heading,
  tablistLabel,
  responsibilitiesTitle,
  items,
}: DepartmentTabsProps) {
  const [activeKey, setActiveKey] = useState(items[0]?.key);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function selectTab(index: number) {
    const item = items[index];
    if (!item) return;
    setActiveKey(item.key);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1;
    const keyToIndex: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const nextIndex = keyToIndex[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(nextIndex);
  }

  return (
    <div>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {heading}

        <div role="tablist" aria-label={tablistLabel} className="flex flex-wrap gap-2">
          {items.map((item, index) => {
            const isActive = item.key === activeKey;

            return (
              <button
                key={item.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`dept-tab-${item.key}`}
                aria-selected={isActive}
                aria-controls={`dept-panel-${item.key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveKey(item.key)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-jefai bg-jefai text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-jefai",
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {items.map((item) => (
        <div
          key={item.key}
          role="tabpanel"
          id={`dept-panel-${item.key}`}
          aria-labelledby={`dept-tab-${item.key}`}
          tabIndex={0}
          hidden={item.key !== activeKey}
          className="mt-10"
        >
          <Card tone="white" className="grid gap-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-7">
              <Eyebrow>{item.tag}</Eyebrow>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
            </div>

            <Card tone="ice" className="lg:col-span-5">
              <Eyebrow className="block">{responsibilitiesTitle}</Eyebrow>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-jefai"
                    />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </Card>
          </Card>
        </div>
      ))}
    </div>
  );
}
