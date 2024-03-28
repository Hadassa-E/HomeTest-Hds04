﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;



namespace DAL.Functions
{
    public class MemberDAL : ImemberDAL
    {
        CoronaProjectContext db;
        public MemberDAL(CoronaProjectContext _db)
        {
            db = _db;
        }
        public string AddMember(Member member)
        {
            db.Members.Add(member);
            db.SaveChanges();
            return member.MemberId;
        }

        public bool DeleteMember(string id)
        {
            Member m = db.Members.FirstOrDefault(m => m.MemberId.Equals(id));
            if (m == null)
                return false;
            if(m.MemberWasSick)
                db.CoronaInfections.Remove(db.CoronaInfections.FirstOrDefault(c => c.CoronaInfectionMemberId.Equals(id)));
            if(m.MemberCountOfVaccines!=0)
            {
                List<Vaccine> vaccineListToMember = db.Vaccines.Where(v => v.VaccineMemberId.Equals(id)).ToList();
                vaccineListToMember.ForEach(v => db.Vaccines.Remove(db.Vaccines.FirstOrDefault(vv => vv.VaccineId == v.VaccineId)));
            }
            db.Members.Remove(db.Members.FirstOrDefault(m => m.MemberId.Equals(id)));
            db.SaveChanges();
            return true;
        }

        public List<Member> GetAllMember()
        {
            return db.Members.Include(x => x.CoronaInfections).Include(y=>y.Vaccines).ToList();
        }

        public Member GetMember(string id)
        {
            return db.Members.FirstOrDefault(m => m.MemberId.Equals(id));
        }

        public bool UpdateMember(Member member)
        {
            Member m = GetMember(member.MemberId);
            if (m == null)
                return false;
            m.MemberFirstname = member.MemberFirstname;
            m.MemberLastname = member.MemberLastname;
            m.MemberPic = member.MemberPic;
            m.MemberAddressStreet = member.MemberAddressStreet;
            m.MemberAddressBuildingNumber = member.MemberAddressBuildingNumber; 
            m.MemberCityId = member.MemberCityId;
            m.MemberBirthdate= member.MemberBirthdate;
            m.MemberPhone = member.MemberPhone;
            m.MemberTelephone = member.MemberTelephone; 
            m.MemberWasSick= member.MemberWasSick;
            m.MemberCountOfVaccines = m.MemberCountOfVaccines;
            db.SaveChanges();
            return true;
        }
    }
}
