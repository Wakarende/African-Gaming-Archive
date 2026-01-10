import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountryFilterProps {
  countries: string[];
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const CountryFilter = ({
  countries,
  selectedCountry,
  onCountryChange,
}: CountryFilterProps) => {
  return (
    <div className="mb-10">
      <Select value={selectedCountry} onValueChange={onCountryChange}>
        <SelectTrigger className="w-[200px] font-mono text-[11px] uppercase tracking-[0.1em] border-border bg-background rounded-none h-10 focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Filter by Country" />
        </SelectTrigger>
        <SelectContent className="bg-background border-border rounded-none">
          <SelectItem
            value="all"
            className="font-mono text-[11px] uppercase tracking-[0.1em] rounded-none"
          >
            All Countries
          </SelectItem>
          {countries.map((country) => (
            <SelectItem
              key={country}
              value={country}
              className="font-mono text-[11px] uppercase tracking-[0.1em] rounded-none"
            >
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountryFilter;
